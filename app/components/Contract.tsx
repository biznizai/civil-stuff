import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import jsPDF from "jspdf"
import { useState } from "react"

const Contract = () => {
  const [contractorName, setContractorName] = useState('')
  const [clientName, setClientName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [contractDetails, setContractDetails] = useState('')

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(20)
    doc.text("Construction Contract", 10, 10)
    doc.setFontSize(12)
    doc.text(`Contractor Name: ${contractorName}`, 10, 30)
    doc.text(`Client Name: ${clientName}`, 10, 40)
    doc.text(`Project Description: ${projectDescription}`, 10, 50)
    doc.text(`Contract Details: ${contractDetails}`, 10, 60)
    doc.save("Construction_Contract.pdf")
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Create Construction Contract</h2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Contractor Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Contractor Name"
            value={contractorName}
            onChange={(e) => setContractorName(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Contract Details"
            value={contractDetails}
            onChange={(e) => setContractDetails(e.target.value)}
            className="mb-4"
          />
          <Button className="w-full" onClick={generatePDF}>Generate PDF Contract</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contract