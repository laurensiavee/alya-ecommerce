export interface PostAddEventReqBody {
    event_name: string;
    event_description: string;
    event_start_at: string;
    event_end_at: string;
    is_active: boolean;
}
