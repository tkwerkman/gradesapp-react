import { norm } from "./normalize"

export function shotDrawingPositionConverter(bounds, num) {return norm(num, bounds.max, bounds.min) * bounds.conv}