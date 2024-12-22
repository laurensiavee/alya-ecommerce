export interface PostAddEventReqBody {
    event_name: string;
    event_description: string;
    event_start_at: Date | null;
    event_end_at: Date | null;
    is_active: boolean;
}
