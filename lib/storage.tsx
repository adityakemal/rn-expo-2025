import { MMKV } from "react-native-mmkv";

const secureParams = {
  id: "mmkv.default",
  encryptionKey: "my-secure-encryption-key!", // Ganti dengan kunci enkripsi Anda
};

export const storage = new MMKV(secureParams);

export const saveToken = (token: string) => {
  storage.set("token", token);
};

export const getToken = () => {
  return storage.getString("token");
};

export const deleteToken = () => {
  storage.delete("token");
};
