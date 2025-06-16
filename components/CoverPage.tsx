import { Text, TouchableOpacity, View } from 'react-native';

export const CoverPage = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <Text className="text-5xl font-extrabold text-white">Welcome</Text>
      <Text className="mt-2 text-center text-lg text-white">
        This is a NativeWind powered cover page
      </Text>
      <TouchableOpacity className="mt-8 rounded-full bg-white px-8 py-3 active:opacity-80">
        <Text className="text-base font-semibold text-blue-600">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
