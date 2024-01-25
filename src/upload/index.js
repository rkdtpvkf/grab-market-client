import { Button, Divider, Form, Input, InputNumber } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="upload-item" onFinish={onSubmit}>
        <Form.Item
          id="Form-item"
          name="upload"
          label={<div className="upload-label">상품사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>img upload test</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          label={<div className="upload-label">판매자 명</div>}
          rules={[{ required: true, message: "이름 입력 필수" }]}
        >
          <Input className="upload-name" size="large" placeholder="이름" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품명 입력 필수" }]}
        >
          <Input className="upload-name" size="large" placeholder="상품 명" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">가격</div>}
          rules={[{ required: true, message: "가격 입력 필수" }]}
        >
          <InputNumber defaultValue={1} className="upload-price" size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 정보</div>}
          rules={[{ required: true, message: "상품정보 입력 필수" }]}
        >
          <Input.TextArea
            className="upload-area"
            size="large"
            placeholder="상품 설명"
            id="product-description"
            showCount={true}
            maxLength={300}
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-botton" size="large" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
