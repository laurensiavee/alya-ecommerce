export interface Menu {
    menu_name: string;
    menu_path?: string;
    menu_expanded?: boolean;
    child_menu?: Menu[];
}