import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import autoTable from "jspdf-autotable"
import jsPDF from "jspdf"
import { useState } from "react"

const BillOfQuantities = () => {
  const [logo, setLogo] = useState<File | null>(null)
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const [excelFile, setExcelFile] = useState<File | null>(null)

  const materials = [
    { item: "Concrete", quantity: "100 m³", unitPrice: "$100", total: "$10,000" },
    { item: "Bricks", quantity: "5000 units", unitPrice: "$0.50", total: "$2,500" },
    { item: "Steel Reinforcement", quantity: "2000 kg", unitPrice: "$1.20", total: "$2,400" },
    { item: "Roofing Sheets", quantity: "100 units", unitPrice: "$15", total: "$1,500" },
    { item: "Paint", quantity: "200 liters", unitPrice: "$20", total: "$4,000" },
    // Add more materials as needed
  ]

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLogo(file)
      setLogoUrl(URL.createObjectURL(file))
    }
  }

  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setExcelFile(file)
      // Process the Excel file as needed
    }
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    const title = "Bill of Quantities for Construction Materials"
    
    // Add logo if available
    if (logoUrl) {
      const img = new Image()
      img.src = logoUrl
      img.onload = () => {
        doc.addImage(img, 'JPEG', 10, 10, 50, 20) // Adjust size and position as needed
        doc.setFontSize(20)
        doc.text(title, 10, 40)
        addTable(doc)
      }
    } else {
      doc.setFontSize(20)
      doc.text(title, 10, 10)
      addTable(doc)
    }
    
    doc.save("Bill_of_Quantities.pdf")
  }

  const addTable = (doc: jsPDF) => {
    doc.setFontSize(12)
    const tableData = materials.map(material => [material.item, material.quantity, material.unitPrice, material.total])
    autoTable(doc, {
      head: [['Item', 'Quantity', 'Unit Price', 'Total']],
      body: tableData,
      startY: 50,
      theme: 'grid',
    })
  }

  const downloadExampleFormat = () => {
    const exampleData = [
      ["Item", "Quantity", "Unit Price", "Total"],
      ["Concrete", "100 m³", "$100", "$10,000"],
      ["Bricks", "5000 units", "$0.50", "$2,500"],
      // Add more example rows as needed
    ]
    
    const worksheet = exampleData.map(row => row.join(",")).join("\n")
    const blob = new Blob([worksheet], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.setAttribute("download", "Bill_of_Quantities_Example.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Bill of Quantities for Construction Materials</h2>

      {/* Logo Upload Card */}
      <Card className="w-full mb-4">
        <CardHeader>
          <CardTitle>Upload Business Logo</CardTitle>
        </CardHeader>
        <CardContent>
          <input type="file" accept="image/*" onChange={handleLogoUpload} className="mb-4" />
          {logoUrl && <img src={logoUrl} alt="Logo Preview" className="mb-4" style={{ width: '100px' }} />}
        </CardContent>
      </Card>

      {/* Excel Upload Card */}
      <Card className="w-full mb-4">
        <CardHeader>
          <CardTitle>Upload Bill of Quantities (Excel Format)</CardTitle>
        </CardHeader>
        <CardContent>
          <input type="file" accept=".xlsx, .xls" onChange={handleExcelUpload} className="mb-4" />
          <Button onClick={downloadExampleFormat}>Download Example Format</Button>
        </CardContent>
      </Card>

      {/* Materials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {materials.map((material, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{material.item}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quantity: {material.quantity}</p>
              <p>Unit Price: {material.unitPrice}</p>
              <p>Total: {material.total}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="w-full" onClick={generatePDF}>Download PDF Report</Button>
    </div>
  )
}

export default BillOfQuantities