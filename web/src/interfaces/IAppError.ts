export interface IDataError {
    message: string,
    details: [{
            code: string,
            message: string,
            path: string[],
            validation: string
        }
    ]
}
