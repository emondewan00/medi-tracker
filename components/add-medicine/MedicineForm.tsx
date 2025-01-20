import { View, Text } from "react-native";
import React from "react";

const MedicineForm = () => {
  return (
    <View className="mt-8 px-6 gap-y-4">
      <Text className="text-2xl font-bold">Add New Medication</Text>

      {/* medicine name  */}
      <View className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white">
        <Ionicons
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 1,
            borderColor: Colors.LIGHT_GRAY_BORDER,
            paddingRight: 12,
          }}
          name="medkit-outline"
          size={20}
        />
        <TextInput
          className="flex-1 pl-2 text-xl"
          placeholder="Medicine Name"
          value={fromValue.name}
          onChangeText={(text) => changeFromValue("name", text)}
        />
      </View>

      {/* medicine type */}
      <FlatList
        data={TypeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`py-3 px-4 border border-lightGrayBorder rounded ${
              fromValue.type === item.name ? "bg-primary" : "bg-white"
            }`}
            onPress={() => changeFromValue("type", item.name)}
          >
            <Text
              className={`${
                fromValue.type === item.name ? "text-white" : "text-black"
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2"
      />

      {/* dose */}
      <View className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white">
        <Ionicons
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 1,
            borderColor: Colors.LIGHT_GRAY_BORDER,
            paddingRight: 12,
          }}
          name="eyedrop-outline"
          size={20}
        />
        <TextInput
          className="flex-1 pl-2 text-xl"
          placeholder="Dose EX.2,5ml"
          value={fromValue.frequency}
          onChangeText={(text) => changeFromValue("frequency", text)}
        />
      </View>

      {/* when to take  dropdown */}
      <View className="border border-lightGrayBorder flex-row items-center p-2 rounded-md bg-white">
        <AntDesign
          name="clockcircleo"
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 1,
            borderColor: Colors.LIGHT_GRAY_BORDER,
            paddingRight: 12,
          }}
          size={20}
        />
        <Picker
          selectedValue={fromValue.whenToTake}
          onValueChange={(itemValue) =>
            changeFromValue("whenToTake", itemValue)
          }
          style={{
            flex: 1,
          }}
        >
          {WhenToTake.map((whenToTake, i) => (
            <Picker.Item key={i} label={whenToTake} value={whenToTake} />
          ))}
        </Picker>
      </View>

      {/* start and End date */}
      <View className="flex flex-row gap-x-4">
        <Pressable
          onPress={() => setShowStartTime(true)}
          className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white flex-1"
        >
          <Ionicons
            style={{
              color: Colors.PRIMARY,
              borderRightWidth: 1,
              borderColor: Colors.LIGHT_GRAY_BORDER,
              paddingRight: 12,
            }}
            name="calendar-outline"
            size={20}
          />
          {showStartTime && (
            <DateTimePicker
              minimumDate={new Date()}
              value={fromValue.startTime || new Date()}
              mode="date"
              is24Hour
              onChange={(e, date) => {
                setShowStartTime(false);
                changeFromValue("startTime", date);
              }}
            />
          )}

          <Text className="text-lg p-[10]">
            {fromValue.startTime &&
              fromValue.startTime.toLocaleDateString([], {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setShowEndTime(true)}
          className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white flex-1"
        >
          <Ionicons
            style={{
              color: Colors.PRIMARY,
              borderRightWidth: 1,
              borderColor: Colors.LIGHT_GRAY_BORDER,
              paddingRight: 12,
            }}
            name="calendar-outline"
            size={20}
          />
          <Text className="text-lg p-[10]">
            {fromValue.endTime === undefined
              ? "End Date"
              : fromValue.endTime.toLocaleDateString([], {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
          </Text>
          {showEndTime && (
            <DateTimePicker
              minimumDate={new Date()}
              value={fromValue.endTime || new Date()}
              mode="date"
              is24Hour
              onChange={(e, date) => {
                setFromValue({ ...fromValue, endTime: date });
                setShowEndTime(false);
              }}
            />
          )}
        </Pressable>
      </View>

      {/* reminder */}
      <TouchableOpacity
        onPress={() => setShowReminder(true)}
        className="border border-lightGrayBorder flex-row items-center gap-x-2 p-2 rounded-md bg-white"
      >
        <Ionicons
          style={{
            color: Colors.PRIMARY,
            borderRightWidth: 1,
            borderColor: Colors.LIGHT_GRAY_BORDER,
            paddingRight: 12,
          }}
          name="timer-outline"
          size={20}
        />
        <Text className="p-[10px]">
          {fromValue.reminder
            ? fromValue.reminder.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Reminder"}
        </Text>
        {showReminder && (
          <DateTimePicker
            value={fromValue.reminder || new Date()}
            mode="time"
            is24Hour
            onChange={(e, date) => {
              setShowReminder(false);
              changeFromValue("reminder", date);
            }}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onPress(fromValue)}
        disabled={loading}
        className="flex-row items-center bg-primary justify-center rounded-md gap-x-2"
      >
        {loading ? (
          <ActivityIndicator size={"large"} color="white" className="py-2" />
        ) : (
          <>
            <AntDesign
              name="pluscircle"
              size={20}
              style={{
                color: "white",
              }}
            />
            <Text className="text-xl font-bold  py-4 text-center text-white ">
              Add Medication
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MedicineForm;
