import React from "react";
import {
  DragHandleMinor,
  EditMinor,
  DeleteMinor,
} from "@shopify/polaris-icons";
import { Icon } from "@shopify/polaris";
import { LinksFunction } from "@remix-run/node";
import listitem from "./listitem.css";
import { IShadow, IShadow2 } from "~/types/type";

interface ListItemProps {
  shadow: IShadow2;
  formData: IShadow2;
  setEditData: (item: IShadow[]) => void;
  data: IShadow[];
  setData: (data: IShadow[]) => void;
  type: string;
}

const ListItem = ({
  shadow,
  formData,
  setEditData,
  data,
  setData,
  type,
}: ListItemProps) => {
  const handleEditClick = (item: any) => {
    setEditData(item);
  };

  const displayProperties = formData?.id === shadow?.id ? formData : shadow;

  const onDelete = (id: number) => {
    if (data.length === 1) {
      return;
    }
    const updatedData = data.filter((item: any) => item.id !== id);

    setData(updatedData);
  };

  const replaceColorIfObject = (color: string) => {
    if (typeof color === "object") {
      return "rgba(254, 251, 251)";
    }
    return color;
  };

  const colorValue = replaceColorIfObject(displayProperties?.color);

  return (
    <div
      draggable
      key={shadow?.id}
      onClick={() => handleEditClick(shadow)}
      className={`layer ${
        formData?.id === shadow?.id ? "active" : "no-active"
      } `}
    >
      <div className="add_layer">
        <div className="layer-current">
          <Icon source={DragHandleMinor} />
          <div>
            {type === "box"
              ? displayProperties?.inset
                ? `inset ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.spread}px ${displayProperties?.blur}px  ${displayProperties?.opacity}px ${colorValue}`
                : ` ${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px  ${displayProperties?.spread}px ${displayProperties?.blur}px  ${displayProperties?.opacity}px ${colorValue} `
              : `${displayProperties?.shiftRight}px ${displayProperties?.shiftDown}px ${displayProperties?.blur}px ${displayProperties?.opacity}px ${colorValue}`}
          </div>
        </div>
        <div className="layer-current">
          <Icon source={EditMinor} />
          <div onClick={() => onDelete(shadow.id)}>
            <Icon source={DeleteMinor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: listitem }];
};
