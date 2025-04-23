import { colors, fontSize } from "@/lib/theme";
import { rupiahFormat, rupiahFormatCompact } from "@/lib/util";
import clsx from "clsx";
import { useState } from "react";
import { Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

const TransactionChart = ({ size }: any) => {
  const [data] = useState([
    { value: 100000, label: "Jan", date: "2024-01-01" }, // Tahun baru tinggi
    { value: 85000, label: "Feb", date: "2024-02-01" }, // Turun setelah tahun baru
    { value: 90000, label: "Mar", date: "2024-03-01" }, // Mulai naik
    { value: 110000, label: "Apr", date: "2024-04-01" }, // Tren naik
    { value: 150000, label: "Mei", date: "2024-05-01" }, // Menjelang liburan
    { value: 180000, label: "Jun", date: "2024-06-01" }, // Puncak musiman
    { value: 170000, label: "Jul", date: "2024-07-01" }, // Mulai turun
    { value: 130000, label: "Ags", date: "2024-08-01" }, // Musim sekolah
    { value: 120005, label: "Sep", date: "2024-09-01" }, // Stabil
    { value: 140000, label: "Okt", date: "2024-10-01" }, // Naik menjelang akhir tahun
    { value: 160000, label: "Nov", date: "2024-11-01" }, // Persiapan akhir tahun
    { value: 200000, label: "Des", date: "2024-12-01" }, // Puncak akhir tahun
    { value: 120000, label: "Jan", date: "2024-01-01" }, // Tahun baru tinggi
    { value: 85000, label: "Feb", date: "2024-02-01" }, // Turun setelah tahun baru
    { value: 90000, label: "Mar", date: "2024-03-01" }, // Mulai naik
    { value: 110000, label: "Apr", date: "2024-04-01" }, // Tren naik
    { value: 150000, label: "Mei", date: "2024-05-01" }, // Menjelang liburan
    { value: 180000, label: "Jun", date: "2024-06-01" }, // Puncak musiman
    { value: 170000, label: "Jul", date: "2024-07-01" }, // Mulai turun
    { value: 130000, label: "Ags", date: "2024-08-01" }, // Musim sekolah
    { value: 120005, label: "Sep", date: "2024-09-01" }, // Stabil
    { value: 140000, label: "Okt", date: "2024-10-01" }, // Naik menjelang akhir tahun
    { value: 160000, label: "Nov", date: "2024-11-01" }, // Persiapan akhir tahun
    { value: 200000, label: "Des", date: "2024-12-01" }, // Puncak akhir tahun
    { value: 120000, label: "Jan", date: "2024-01-01" }, // Tahun baru tinggi
    { value: 85000, label: "Feb", date: "2024-02-01" }, // Turun setelah tahun baru
    { value: 90000, label: "Mar", date: "2024-03-01" }, // Mulai naik
    { value: 110000, label: "Apr", date: "2024-04-01" }, // Tren naik
    { value: 150000, label: "Mei", date: "2024-05-01" }, // Menjelang liburan
    { value: 180000, label: "Jun", date: "2024-06-01" }, // Puncak musiman
    { value: 170000, label: "Jul", date: "2024-07-01" }, // Mulai turun
    { value: 130000, label: "Ags", date: "2024-08-01" }, // Musim sekolah
    { value: 120005, label: "Sep", date: "2024-09-01" }, // Stabil
    { value: 140000, label: "Okt", date: "2024-10-01" }, // Naik menjelang akhir tahun
    { value: 160000, label: "Nov", date: "2024-11-01" }, // Persiapan akhir tahun
    { value: 200000, label: "Des", date: "2024-12-01" }, // Puncak akhir tahun
    { value: 120000, label: "Jan", date: "2024-01-01" }, // Tahun baru tinggi
    { value: 85000, label: "Feb", date: "2024-02-01" }, // Turun setelah tahun baru
    { value: 90000, label: "Mar", date: "2024-03-01" }, // Mulai naik
    { value: 110000, label: "Apr", date: "2024-04-01" }, // Tren naik
    { value: 150000, label: "Mei", date: "2024-05-01" }, // Menjelang liburan
    { value: 180000, label: "Jun", date: "2024-06-01" }, // Puncak musiman
    { value: 170000, label: "Jul", date: "2024-07-01" }, // Mulai turun
    { value: 130000, label: "Ags", date: "2024-08-01" }, // Musim sekolah
    { value: 120005, label: "Sep", date: "2024-09-01" }, // Stabil
    { value: 140000, label: "Okt", date: "2024-10-01" }, // Naik menjelang akhir tahun
    { value: 160000, label: "Nov", date: "2024-11-01" }, // Persiapan akhir tahun
    { value: 200000, label: "Des", date: "2024-12-01" }, // Puncak akhir tahun
  ]);
  const maxVal = Math.max(...data.map((res) => res.value));

  const renderTooltip = (item: any, idx: number) => {
    return (
      <View
        className={clsx(
          "bg-white absolute  px-2 border border-yellow-400 p-1 z-10 top-[100%] left-[12px]",
          idx > data.length - 5
            ? "right-[-12px] left-[unset] rounded-xl rounded-es-none"
            : "rounded-xl rounded-ss-none"
        )}>
        <Text className="text-xs">{item.label}</Text>
        <Text className="font-mono text-base text-black">
          {rupiahFormat(item.value)}
        </Text>
      </View>
    );
  };

  return (
    <BarChart
      data={data.map((res) => ({
        ...res,
        // topLabelComponent: () => (
        //   <Text className="font-mono text-[10px] mb-[2px] text-red-500">
        //     {rupiahFormatCompact(res.value)}
        //   </Text>
        // ),
      }))}
      frontColor={colors.yellow[400]}
      barWidth={24}
      //   showLine
      //   showReferenceLine1
      showFractionalValues
      spacing={18}
      parentWidth={800}
      height={size?.height - 60}
      width={size?.width - 58}
      roundedTop
      roundedBottom
      adjustToWidth
      hideRules
      isAnimated
      //   yAxisLabelPrefix="Rp."
      yAxisThickness={0}
      xAxisThickness={0}
      //   yAxisLabelWidth={80}
      yAxisTextStyle={{ color: colors.neutral[800], fontSize: 12 }}
      xAxisLabelTextStyle={{
        color: colors.neutral[700],
        fontSize: 12,
      }}
      noOfSections={4}
      minHeight={5}
      formatYLabel={(value) => {
        // Ubah angka jadi format rupiah
        return `${rupiahFormatCompact(value)} `;
      }}
      maxValue={maxVal + maxVal * 0.1} //max value di y axis tambah 10% biar gak ilang mentok kena overflow
      onPress={({ item }: any, idx: any) => {
        // Handle the display of the tooltip here, e.g., using state to control visibility
        console.log("Clicked data point:", idx);
      }}
      renderTooltip={renderTooltip}
    />
  );
};

export default TransactionChart;
