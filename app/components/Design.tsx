import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Design() {
  return (
    <div className="p-4 space-y-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>House Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="number" placeholder="Square Footage" />
            <Input type="number" placeholder="Number of Bedrooms" />
            <Input type="number" placeholder="Number of Bathrooms" />
            <Input placeholder="Architectural Style" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Interior Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Flooring Type" />
            <Input placeholder="Wall Color" />
            <Input placeholder="Special Features (e.g., fireplace, skylight)" />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Exterior Design</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Siding Material" />
            <Input placeholder="Roof Color" />
            <Input placeholder="Landscaping Ideas" />
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
      </div>
      <Button className="w-full">Save Design Choices</Button>
    </div>
  )
}