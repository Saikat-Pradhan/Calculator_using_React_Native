import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Define allowed key types
type KeyValue = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "." | "+" | "-" | "*" | "/" | "=" | "C";

export default function Calculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Explicitly type the parameter
  const handlePress = (value: KeyValue): void => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Evaluate safely
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Keys typed as KeyValue[]
  const keys: KeyValue[] = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Calculator Body */}
      <View
        style={{
          width: "90%",
          height: "70%",
          backgroundColor: "#33edd1",
          padding: 10,
          borderRadius: 10,
        }}
      >
        {/* Display */}
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "flex-end",
            padding: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 24 }}>{input}</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{result}</Text>
        </View>

        {/* Keys */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {keys.map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handlePress(key)}
              style={{
                width: "22%",
                height: 60,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 5,
                borderRadius: 8,
                elevation: 3,
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
