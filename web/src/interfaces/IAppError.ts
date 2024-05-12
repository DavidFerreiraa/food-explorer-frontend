export interface IAppError {
    code: string,
    response?: {
        data: {
            message: string,
            statusCode: number,
            details: [{
                    code: string,
                    message: string,
                    path: string[],
                    validation: string
                }
            ]
        }
    }
}