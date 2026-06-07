export function cdow(dateObject) {
  return dateObject.toLocaleDateString("en-IN", { weekday: "short" });
}
