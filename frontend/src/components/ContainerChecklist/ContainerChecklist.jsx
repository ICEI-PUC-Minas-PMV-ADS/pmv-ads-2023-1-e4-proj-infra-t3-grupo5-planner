import React, { useState, useEffect, useRef } from "react";
import Box from "../Box/Box";
import { RedBox, WhiteBox } from "../Box/Box.styled";
import Text from "../Text/Text";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Line, Label, ScrollBox, DownRow } from "./ContainerChecklist.styled";

const ContainerChecklist = () => {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  const handleAddItem = () => {
    if (items.length > 0) {
      const lastItemIndex = items.length - 1;
      const updatedItems = items.map((item, index) => {
        if (index === lastItemIndex) {
          return { ...item, text: item.text + ' ' };
        }
        return item;
      });
      setItems([...updatedItems, { id: Date.now(), text: '' }]);
    } else {
      setItems([...items, { id: Date.now(), text: '' }]);
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddItem();
    }
  };

  const handleItemChange = (event, itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, text: event.target.value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleKeyDown = (event, itemId) => {
    if (event.key === "Backspace" && event.target.value === "") {
      handleDeleteItem(itemId);
    }
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Backspace" && event.target === document.body) {
        event.preventDefault();
        if (items.length > 0) {
          handleDeleteItem(items[items.length - 1].id);
        }
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);
    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [items]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [items]);

  const styleInputTextChecklist = {
    border: "none",
    backgroundColor: "#f2f2f2",
    width: "100%",
    fontSize: 20,
    fontWeight: 400,
    fontFamily: "Quicksand",
  }

  return (
    <Box
      id="WidgetBox"
      content={
        <div>
          <RedBox>
            <Text id="big-title" text="Checklist" />
          </RedBox>
          <WhiteBox>
            <ScrollBox>
              {items.map((item, index) => (
                <Line key={item.id}>
                  <Label className="label-checkbox">
                    <Input
                      type="Checkbox"
                      className
                    />
                  </Label>
                  <Label className="label-text">
                    <input 
                      ref={index === items.length - 1 ? inputRef : null}
                      style={styleInputTextChecklist}

                      id={`text-container-content-${item.id}`}
                      type="Text"
                      value={item.text}
                      onChange={(event) => handleItemChange(event, item.id)}
                      onKeyDown={(event) => handleKeyDown(event, item.id)}
                      onKeyPress={handleKeyPress}
                    />
                  </Label>
                </Line>
              ))}
            </ScrollBox>
            <DownRow>
              <Button
                plusButton
                id="pink-button"
                text=""
                textId="button-black-text"
                onClick={handleAddItem}
              />
            </DownRow>
          </WhiteBox>
        </div>
      }
    />
  );
};

export default ContainerChecklist;

