import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Planning() {
  return (
    <div className="p-4 space-y-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Planning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Project Name" />
            <Input placeholder="Project Location" />
            <Input type="date" placeholder="Start Date" />
            <Input type="date" placeholder="Estimated Completion Date" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Budget Planning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="number" placeholder="Total Budget ($)" />
            <Input type="number" placeholder="Land Cost ($)" />
            <Input type="number" placeholder="Construction Cost ($)" />
            <Input type="number" placeholder="Contingency Fund ($)" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Bill of Quantities for Construction Materials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="number" placeholder="Quantity of Materials" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contract</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Contractor Name" />
            <Input type="text" placeholder="Contract Details" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Obtain permits', 'Hire architect', 'Secure financing', 'Choose contractor'].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input type="checkbox" id={`item-${index}`} className="w-4 h-4" />
                <label htmlFor={`item-${index}`}>{item}</label>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Button className="w-full">Save Planning Details</Button>
    </div>
  )
}