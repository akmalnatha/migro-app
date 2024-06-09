import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native';
import { Chip } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function ExploreLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalPosition = useRef(new Animated.Value(-Dimensions.get('window').height)).current;

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(modalPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalPosition, {
        toValue: -Dimensions.get('window').height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="(content-explore)"
          options={{
            title: "Explore", 
            headerTitle: () => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#FFFFFFF",
                }}
              >
                <Text className="text-[20px] font-bold text-black">Explore</Text>
                <Chip
                  textStyle={{ fontSize: 14 }}
                  icon={"chevron-down"}
                  style={{ backgroundColor: "#DDDEE1" }}
                  onPress={toggleModal}
                >
                  All
                </Chip>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="(project-detail)"
          options={{
            title: "Detail", 
            headerTitle: (props) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text className="text-[20px] font-bold text-black">
                  Project Detail
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="back-project"
          options={{
            title: "Back Project",
            headerTitle: (props) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text className="text-[20px] font-bold text-black">
                  Back This Project
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            title: "Payment",
            headerTitle: (props) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text className="text-[20px] font-bold text-black">
                  Payment
                </Text>
              </View>
            ),
          }}
        />
      </Stack>

      {modalVisible && (
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              paddingTop: Platform.OS === "ios" ? 88 : 80,
              transform: [{ translateY: modalPosition }],
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  padding: 16,
                  paddingTop: 0,
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  gap: 16
                }}
                className='h-full w-full'
              >
                <Text style={{ fontSize: 20, fontWeight: 700 }}>All Projects</Text>
                <Text style={{ fontSize: 16, color: "#008E8A" }}>Category</Text>
                <Text style={{ fontSize: 20 }}>Art</Text>
                <Text style={{ fontSize: 20 }}>Comic & Illustration</Text>
                <Text style={{ fontSize: 20 }}>Games</Text>
                <Text style={{ fontSize: 20 }}>Craft</Text>
                <Text style={{ fontSize: 20 }}>Design</Text>
                <Text style={{ fontSize: 20 }}>Film & Video</Text>
                <Text style={{ fontSize: 20 }}>Food</Text>
                <Text style={{ fontSize: 20 }}>Music</Text>
                <Text style={{ fontSize: 20 }}>Photography</Text>
                <Text style={{ fontSize: 20 }}>Fashion</Text>
                <Text style={{ fontSize: 20 }}>Shop & Commercial</Text>
                <Text style={{ fontSize: 20 }}>Sport</Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
