import React, {
  useState,
  useImperativeHandle,
  useRef,
  useCallback,
} from "react";
import { Modal } from "antd";
import "./index.less";

export interface MyModalProps {
  title?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

/**
 * 暴露的方法, 适用`{ComponentName}Methods`形式命名
 */
export interface MyModalMethods {
  customShow(): void;
}

export const MyModal = React.forwardRef<MyModalMethods, MyModalProps>(
  (props, ref) => {
    const [visible, setVisible] = useState<boolean>();

    // 初始化ref暴露的方法
    useImperativeHandle(ref, () => ({
      customShow: () => setVisible(true),
    }));
    return <Modal visible={visible}>...</Modal>;
  }
);

export default function Test(props: {}) {
  // 引用
  const modal = useRef<MyModalMethods | null>(null);
  const confirm = useCallback(() => {
    if (modal.current) {
      modal.current.customShow();
    }
  }, []);

  const handleOk = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={confirm}>show</button>
      <MyModal ref={modal} onOk={handleOk} />
    </div>
  );
}
