import { Menu } from "@/entities/Menu.interface";

export const ADMIN_MENU: Menu[] = [
    {
        menu_name: "Promotion",
        menu_expanded: true,
        child_menu: [
            {
                menu_name: "Add Promotion",
                menu_path: "/add-promotion"
            },
            {
                menu_name: "Promotion List",
                menu_path: "/"
            }
        ]
    },
    {
        menu_name: "Product",
        menu_expanded: true,
        child_menu: [
            {
                menu_name: "Add Product",
                menu_path: "/add-product"
            },
            {
                menu_name: "Restock",
                menu_path: "/"
            },
            {
                menu_name: "Add Product Category",
                menu_path: "/add-product-category"
            },
            {
                menu_name: "Product Category List",
                menu_path: "/product-category-list"
            }
        ]
    },
    {
        menu_name: "Order",
        menu_expanded: true,
        child_menu: [
            {
                menu_name: "Order List",
                menu_path: "/"
            }
        ]
    },
    {
        menu_name: "Complain",
        menu_expanded: true,
        child_menu: [
            {
                menu_name: "Complain List",
                menu_path: "/"
            }
        ]
    }
]
