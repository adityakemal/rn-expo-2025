// utils/fontSize.ts
import { moderateScale } from "react-native-size-matters";

export const fontSize = {
  xs: moderateScale(12),
  sm: moderateScale(14),
  base: moderateScale(16),
  lg: moderateScale(18),
  xl: moderateScale(22),
};

export const rupiahFormat = (value: any) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency", // add Rp
    currency: "IDR",
    // maximumSignificantDigits: 20
    minimumFractionDigits: 0,
  }).format(value || 0);

export const rupiahFormatCompact = (value: any) =>
  new Intl.NumberFormat("id-ID", {
    // style: "currency", // add Rp
    // currency: "IDR",
    notation: "compact",
    compactDisplay: "short",
  }).format(value || 0);
