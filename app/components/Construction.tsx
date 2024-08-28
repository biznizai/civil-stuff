import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Construction() {
  return (
    <div className="p-4 space-y-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Construction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
            <p>Project is 33% complete</p>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-bold">Foundation</span>
                <span>2023-06-01 to 2023-06-15</span>
                <span className="text-green-500">Completed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Framing</span>
                <span>2023-06-16 to 2023-07-15</span>
                <span className="text-yellow-500">In Progress</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Roofing</span>
                <span>2023-07-16 to 2023-07-30</span>
                <span className="text-gray-500">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Budget Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Total Budget:</span>
              <span>$500,000</span>
            </div>
            <div className="flex justify-between">
              <span>Spent to Date:</span>
              <span>$165,000</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining:</span>
              <span>$335,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Add Expense</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Expense Description" />
            <Input type="number" placeholder="Amount ($)" />
            <Button className="w-full">Add Expense</Button>
          </CardContent>
        </Card>
      </div>
      <Button className="w-full">Save Construction Details</Button>
    </div>
  )
}