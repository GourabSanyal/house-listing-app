import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import * as houseAction from "../redux/actions/houseAction";
import formSchema from "../validation/validation";

const AddHomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(houseAction.fetchHouses())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={10}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Formik
          initialValues={{
            title: "",
            image: "",
            homeType: "",
            type: "",
            address: "",
            yearBuilt: "",
            description: "",
          }}
          onSubmit={(values) => {
            // console.log('from screen -->', values);
            dispatch(houseAction.createHome(values))
              .then(() => {
                Alert.alert("Success", "My Alert Msg", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ]);
              })
              .catch(() => {
                Alert.alert("An error occured", "Please Try Again", [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  { text: "OK", style: "default" },
                ]);
              });
          }}
          validationSchema={formSchema}
        >
          {(props) => {
            return (
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("title")}
                    value={props.values.title}
                    onBlur={props.handleBlur("title")}
                  />
                  <Text style={styles.error}>
                    {props.touched.title && props.errors.title}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Image URL</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("image")}
                    value={props.values.image}
                    onBlur={props.handleBlur("image")}
                  />
                  <Text style={styles.error}>
                    {props.touched.image && props.errors.image}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Home Type</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("homeType")}
                    value={props.values.homeType}
                    onBlur={props.handleBlur("homeType")}
                  />
                  <Text style={styles.error}>
                    {props.touched.homeType && props.errors.homeType}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("price")}
                    value={props.values.price}
                    keyboardType={"numeric"}
                    onBlur={props.handleBlur("price")}
                  />
                  <Text style={styles.error}>
                    {props.touched.price && props.errors.price}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Year Built</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={props.handleChange("yearBuilt")}
                    value={props.values.yearBuilt}
                    keyboardType={"numeric"}
                    onBlur={props.handleBlur("yearBuilt")}
                  />
                  <Text style={styles.error}>
                    {props.touched.yearBuilt && props.errors.yearBuilt}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput
                    style={styles.input}
                    multiline
                    onChangeText={props.handleChange("address")}
                    value={props.values.address}
                    onBlur={props.handleBlur("address")}
                  />
                  <Text style={styles.error}>
                    {props.touched.address && props.errors.address}
                  </Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput
                    style={styles.input}
                    multiline
                    onChangeText={props.handleChange("description")}
                    value={props.values.description}
                    onBlur={props.handleBlur("description")}
                  />
                  <Text style={styles.error}>
                    {props.touched.description && props.errors.description}
                  </Text>
                </View>

                <View style={styles.buttonContainer}>
                  <Button title="Add Home" onPress={props.handleSubmit} />
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
  },
  formGroup: {
    width: "100%",
  },
  label: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  error: {
    color: "#FF0000",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddHomeScreen;
