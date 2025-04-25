import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { CaretDown, MagnifyingGlass } from "phosphor-react-native";
import ContainerWrapper from "@/components/ContainerWrapper";
import { SelectList } from "react-native-dropdown-select-list";
import { useGetCategory } from "@/api/useMenuApi";

const Bill = () => {
  const [selected, setSelected] = React.useState("");
  const { data: categories, isLoading, isError } = useGetCategory();

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  return (
    <ContainerWrapper title="Open Billl">
      <View className="px-5">
        <Text>Bill - {selected}</Text>
        <SelectList
          search
          arrowicon={<CaretDown size={18} color="black" />}
          searchicon={<MagnifyingGlass size={18} color="black" />}
          searchPlaceholder="Cari"
          setSelected={(val: any) => setSelected(val)}
          inputStyles={{ paddingLeft: 12 }}
          fontFamily="Gilroy-Regular"
          data={data}
          save={"key"} // key /value
          boxStyles={{ borderRadius: 100 }} //override default styles
          // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
        />
      </View>
      <Text>{JSON.stringify(categories, null, 2)}</Text>
    </ContainerWrapper>
  );
};

const styles = StyleSheet.create({});

export default Bill;
