export interface BaseResp<T = null> {
    status: number;
    message: string;
    data?: T;
}