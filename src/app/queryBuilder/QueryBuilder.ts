import { FilterQuery, Query, Types } from "mongoose";




class QueryBuilder<T> {
    public modelQuery: Query<T[], T>
    public query: Record<string, unknown>

    constructor(modelQury: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQury;
        this.query = query;
    }

    search(searchAbleFields: string[]) {
        const search = this.query.search;

        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: search, $options: 'i' }
                }) as FilterQuery<T>)
            })
        }
        return this;
    }

    filter() {
        const queryObj = { ...this.query };
        const excludeFildes = ['search', 'sort', 'limit', 'page', 'field']
        excludeFildes.forEach((field) => {
            delete queryObj[field]
        })

        if (queryObj.tags) {
            queryObj.tags = { $in: queryObj.tags };
        }
        if (queryObj.category) {
            queryObj.category = { $in: queryObj.category };
        }
        if (queryObj['ratings.average']) {
            queryObj['ratings.average'] = { $gte: queryObj['ratings.average'] }
        }
        if (queryObj.providerId) {

            try {
                queryObj.providerId = new Types.ObjectId(queryObj.providerId as string);

            } catch (error) {
                console.error('Invalid providerId format:', queryObj.providerId);
            }
        }

        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>)
        return this;
    }


    sort() {
        const sort = this.query.sort || 'createdAt';

        this.modelQuery = this.modelQuery.sort(sort as string);

        return this;
    }

    paginate() {

        const page = Number(this.query?.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }

    fields() {
        const field = (this.query.field as string)?.split(',').join(' ') || '-__V';

        this.modelQuery = this.modelQuery.select(field);
        return this;

    }

    async countTotal() {
        const filter = this.modelQuery.getFilter();
        const total = await this.modelQuery.model.countDocuments(filter);
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const totalPage = Math.ceil(total / limit)
        return {
            total,
            page,
            limit,
            totalPage
        }
    }
}


export default QueryBuilder;