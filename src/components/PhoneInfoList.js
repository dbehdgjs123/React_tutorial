import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  render() {
    const { data, onRemove, onUpdate } = this.props;

    if (!data) return null;
    const list = data.map((info) => (
      <PhoneInfo
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
        key={info.id}
      />
    ));

    return <div className="arara">{list}</div>;
  }
}

export default PhoneInfoList;
