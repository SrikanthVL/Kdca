import React from "react";
import { Button, Form, Input, Radio, Upload, DatePicker, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "../assets/styles/newRegister/newRegister.scss";

  const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);


  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

function NewRegister() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
  
    };
    console.log('Received values of form: ', values);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <div className="main">
      <div className="new">
        <div className="newRegister">New Registeration</div>
        <Form
          className="m-4"
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="First Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Middle Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Middle Name" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Last Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Title"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Title" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Mobile Number"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Mobile Number" />
              </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="sonDaughterof"
                label="Son/Daughter of"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Parent Guardian Name" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Relationship"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Relationship"
                  allowClear
                >
                  <Option value="male">Father</Option>
                  <Option value="female">Mother</Option>
                  <Option value="other">Other</Option>
                </Select>{" "}
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Mother Tongue"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Eg:Tamil, English, or.." />
              </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select Gender"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-md-4">
            <Form.Item  
                name="dob" 
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                  },
                ]} >
                <DatePicker className="datepicker" />
              </Form.Item>
            </div>
            <div className="col-md-4">
            <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={1} placeholder="Address" />
      </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="State"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="District"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                 <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select District"
                  allowClear
                >
                  <Option value="Ariyalur">Male</Option>
                  <Option value="Chengalpattu">Female</Option>
                  <Option value="Chennai">Other</Option>
                </Select>
              </Form.Item>
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="name"
                label="Pincode"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Pincode" />
              </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item name="name" label="FIDE ID" rules={[{}]}>
                <Input placeholder="FIDE ID"/>
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item name="name" label="AICF ID" rules={[{}]}>
                <Input placeholder="AICF ID" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="playerType"
                label="Player Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="player"> Player </Radio>
                  <Radio value="arbiter"> Arbiter </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </div>
          <div className="row d-flex m-2">
            <div className="col-md-4">
              <Form.Item
                name="Passport Size Photo"
                label="Passport Size Photo"
                rules={[
                  {
                    required: true,
                  },
                ]}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                // extra="longgggggggggggggggggggggggggggggggggg"
              >
                <Upload style={{wdth:'100%'}} name="logo" action="/upload.do" listType="picture">
                  <Button style={{wdth:'100%'}} className="docfield" icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item  name="dobRegistration" label="Date of Birth Registration" >
                <DatePicker className="datepicker" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item
                name="Birth Certificate"
                label="Birth Certificate"
                rules={[
                  {
                    required: true,
                  },
                ]}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                // extra="longgggggggggggggggggggggggggggggggggg"
              >
                <Upload className="docfield" name="logo" action="/upload.do" listType="picture">
                  <Button className="datepicker" icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default NewRegister;
