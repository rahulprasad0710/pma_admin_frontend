export function humanizeEnum(str: string | undefined) {
    if (!str) return "";
    return str
        .toLowerCase() // "cash_on_delivery"
        .replace(/_/g, " ") // "cash on delivery"
        .replace(/\b\w/g, (c) => c.toUpperCase()); // "Cash On Delivery"
}

// function removeUnderscore(str: string): string {
//     return str.replace(/_/g, " ");
// }
