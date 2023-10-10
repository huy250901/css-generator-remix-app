import React, { useState, useEffect } from "react";
import {
  AppProvider,
  Grid,
  LegacyCard,
  RangeSlider,
  Page,
  Checkbox,
  FormLayout,
  Button,
} from "@shopify/polaris";
import tinycolor from "tinycolor2";

import { LinksFunction } from "@remix-run/node";
import mainbox from "./mainbox.css";
import { BoxShadowProperty, initialBoxShadow } from "~/types/type";
import ListItem, { links as listitem } from "../ListItem/ListItem";

const MainBox = () => {
  const [data, setData] = useState(initialBoxShadow);
  const [selectedColor, setSelectedColor] = useState("#e2e2e2");
  const [selectedColorChildren, setSelectedColorChildren] = useState("#ff6666");
  const [shadows, setShadows] = useState<any>([]);
  const [editData, setEditData] = useState<any>();
  const [formData, setFormData] = useState(data[0]);
  const [count, setCount] = useState(data.length);

  const handleColorChangeChildren = (event: any) => {
    setSelectedColorChildren(event.target.value);
  };

  const handleColorChangeBackground = (event: any) => {
    setSelectedColor(event.target.value);
  };

  useEffect(() => {
    if (editData) {
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        shiftRight: editData.shiftRight,
        shiftDown: editData.shiftDown,
        spread: editData.spread,
        blur: editData.blur,
        opacity: editData.opacity,
        color: editData.color,
        inset: editData.inset,
        id: editData.id,
      }));
    } else {
      setEditData(data[0]);
    }
  }, [editData]);

  const updateShadow = (prop: string, val: any) => {
    if (prop === "color") {
      const rgbColor = tinycolor(val).toRgb(); // Chuyển đổi HEX thành RGB
      val = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${
        formData.opacity / 100
      })`;
    }

    setFormData({ ...formData, [prop]: val });
    console.log("🚀 ~ file: Box.tsx:29 ~ updateShadow ~ val:", val);
    if (editData) {
      const updatedData = data.map((item: any) => {
        if (item.id === editData.id) {
          return { ...item, ...formData };
        }
        return item;
      });
      setData(updatedData);
    }
  };

  useEffect(() => {
    const boxShadowString = data
      .map((item: any) => {
        const { shiftRight, shiftDown, blur, spread, color, inset, opacity } =
          item;

        console.log("HSB Color:", color); // Log giá trị màu HSB

        const rgbaColor = tinycolor(color)
          .setAlpha(opacity / 100)
          .toRgbString();

        console.log("RGBA Color:", rgbaColor); // Log giá trị màu RGBA

        const insetString = inset
          ? `inset ${shiftRight}px ${shiftDown}px ${spread}px ${blur}px  `
          : `${shiftRight}px ${shiftDown}px ${spread}px ${blur}px `;

        return ` ${insetString} ${rgbaColor} `;
      })
      .join(",");

    console.log("data:", data[0]);

    setShadows(boxShadowString);
  }, [data, formData]);

  const addShadow = () => {
    const newData: BoxShadowProperty = {
      id: count,
      shiftRight: 0,
      shiftDown: 0,
      spread: 5,
      blur: 3,
      opacity: 20,
      color: `rgba(255, 255, 255, 1})`,
      inset: false,
    };
    setData((prevData: any) => [...prevData, newData]);
    setCount(count + 1);
  };

  return (
    <AppProvider i18n={{}}>
      <div className="main_box">
        <Page fullWidth>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <LegacyCard sectioned title="Box-Shadow CSS Generator">
                <div className="slider">
                  <RangeSlider
                    label="Shift right"
                    value={formData.shiftRight}
                    onChange={(e) => updateShadow("shiftRight", e)}
                    output
                    min={-50}
                    max={50}
                    step={1}
                  />
                </div>
                <RangeSlider
                  label="Shift down"
                  value={formData.shiftDown}
                  onChange={(e) => updateShadow("shiftDown", e)}
                  output
                  min={-50}
                  max={50}
                  step={1}
                />
                <RangeSlider
                  label="Spread"
                  value={formData.spread}
                  onChange={(e) => updateShadow("spread", e)}
                  output
                  min={0}
                  max={100}
                  step={1}
                />
                <RangeSlider
                  label="Blur"
                  value={formData.blur}
                  onChange={(e) => updateShadow("blur", e)}
                  output
                  min={0}
                  max={100}
                  step={1}
                />
                <RangeSlider
                  label="Opacity"
                  value={formData.opacity}
                  onChange={(e) => updateShadow("opacity", e)}
                  output
                  min={0}
                  max={100}
                  step={1}
                />
                <Checkbox
                  label="Inset"
                  checked={formData.inset}
                  onChange={(e) => updateShadow("inset", e)}
                />
                <FormLayout>
                  <div className="colorPicker">
                    <input
                      className="color"
                      type="color"
                      onChange={(e) => updateShadow("color", e.target.value)} // Sử dụng e.target.value để lấy giá trị màu từ color picker
                    />
                  </div>
                </FormLayout>
                <div className="btn_addlayer">
                  <Button size="medium" onClick={addShadow}>
                    Add Layer
                  </Button>
                </div>
                <div className="ilst">
                  {data.map((e: any, index: number) => (
                    <ListItem
                      key={index}
                      shadow={e}
                      formData={formData}
                      data={data}
                      setData={setData}
                      setEditData={setEditData}
                      type="box"
                    />
                  ))}
                </div>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
              <LegacyCard sectioned title="Preview">
                <FormLayout>
                  <div className="preview_color">
                    <input
                      className="color"
                      type="color"
                      value={selectedColor}
                      onChange={handleColorChangeBackground}
                    />
                    <input
                      className="color"
                      type="color"
                      value={selectedColorChildren}
                      onChange={handleColorChangeChildren}
                    />
                  </div>
                </FormLayout>
                <LegacyCard.Header>
                  <div style={{ background: selectedColor, padding: 36 }}>
                    <div
                      className="box-preview "
                      style={{
                        boxShadow: shadows,
                        background: selectedColorChildren,
                      }}
                    ></div>
                  </div>
                </LegacyCard.Header>
              </LegacyCard>
              <LegacyCard sectioned title="CSS code">
                <pre>
                  <code>box-shadow:{shadows}</code>
                </pre>
              </LegacyCard>
              <LegacyCard sectioned title="Template">
                <div className="container_box_template">
                  <div className="box-template"></div>
                  <div className="box-template2"></div>
                </div>
              </LegacyCard>
            </Grid.Cell>
          </Grid>
        </Page>
      </div>
    </AppProvider>
  );
};

export default MainBox;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: mainbox }, ...listitem()];
};
