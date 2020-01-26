import { Document, Model, Types } from 'mongoose';

export abstract class DataService<TIModel extends Document> {

    constructor (
        protected schema: Model<TIModel>
    ) {}

    public getById(id: Types.ObjectId): Promise<TIModel> {
        return new Promise<TIModel>((res, rej) => {
            this.schema.findById(id, (err: any, result: TIModel) => {
                if (err) {
                    rej(err);
                } else {
                    res(result);
                }
            });
        });
    }

    public getAll(): Promise<TIModel[]> {

        return new Promise<TIModel[]>((res, rej) => {

            this.schema
                .find({})
                .then((result: TIModel[]) => {
                    res(result);
                })
                .catch((err: any) => {
                    rej(err);
                });
        });
    }

    public async save(model: TIModel): Promise<TIModel> {
        let dbModel: TIModel;

        model._id = new Types.ObjectId(model._id);
        dbModel = await this.getById(model._id);
        dbModel.set(model);

        return await dbModel.save();
    }
}