import { Document, Model } from 'mongoose';

export abstract class DataService<TIModel extends Document> {

    constructor (
        protected schema: Model<TIModel>
    ) {}

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
}