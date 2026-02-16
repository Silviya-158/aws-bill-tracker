# 🔥 Smart Bill Expense Tracker

A cloud-based serverless application built using AWS that automates expense tracking by storing and managing bill records.

---

## 📌 Project Overview

Smart Bill Expense Tracker is a serverless cloud application that allows users to upload bill images and record expenses. The system stores expense data in AWS DynamoDB and provides a simple dashboard to monitor spending.

This project demonstrates the use of AWS cloud services, serverless architecture, and scalable backend design.

---

## 🚀 Features

✔ Upload bill images  
✔ Record expense amount  
✔ Expense categorization  
✔ Expense history tracking  
✔ Dashboard summary  
✔ Cloud data storage  
✔ Serverless backend  

---

## 🧩 Architecture

Frontend → Amazon S3 (Static Website Hosting)  
API Layer → API Gateway  
Backend → AWS Lambda  
Database → DynamoDB  
AI Processing → Amazon Textract  

---

## ☁ AWS Services Used

- **Amazon S3** → Frontend Hosting & Image Storage  
- **API Gateway** → API Communication  
- **AWS Lambda** → Backend Logic  
- **DynamoDB** → Expense Data Storage  
- **Amazon Textract** → Text Extraction from Bills  
- **CloudWatch** → Logging & Monitoring  

---

## 💡 How the System Works

1️⃣ User uploads bill image / enters expense  
2️⃣ Frontend sends request via API Gateway  
3️⃣ Lambda processes request  
4️⃣ Textract extracts bill data (if image provided)  
5️⃣ Expense stored in DynamoDB  
6️⃣ Dashboard updates UI  

---

## 🛠 Technologies Used

- HTML  
- CSS  
- JavaScript  
- AWS Cloud Services  

---

## 📊 Advantages

✔ Serverless Architecture  
✔ Scalable Backend  
✔ No Server Management  
✔ Cost Efficient (Free Tier)  
✔ Cloud Data Persistence  

---

## 📷 Screenshots

screenshots/api_gateway.PNG
screenshots/explore_items.PNG
screenshots/lamda.PNG
screenshots/s3budget.PNG



---

## 🎯 Learning Outcomes

✔ Understanding AWS Serverless Services  
✔ Cloud Storage & Database Integration  
✔ API Communication  
✔ Cloud Monitoring  
✔ Practical Cloud Application Development  

---

## 👨‍💻 Author

Developed as part of AWS Cloud Project.

---

## ✅ Conclusion

Smart Bill Expense Tracker provides an efficient way to manage expenses using AWS cloud infrastructure. The project highlights the power of serverless computing and cloud-native application design.
