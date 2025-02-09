import type { StepProps } from "./types/types"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export function ContactStep({ data, updateFields }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Add contact information.</h2>
        <p className="text-gray-500">Help us get to know you better.</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100">
          {data.photo ? (
            <Image
              src={URL.createObjectURL(data.photo) || "/placeholder.svg"}
              alt="Profile photo"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl text-gray-400">👤</span>
            </div>
          )}
        </div>
        <label className="cursor-pointer text-primary hover:text-primary/90">
          + Upload photo
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => updateFields({ photo: e.target.files?.[0] })}
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" value={data.firstName} onChange={(e) => updateFields({ firstName: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" value={data.lastName} onChange={(e) => updateFields({ lastName: e.target.value })} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" value={data.address} onChange={(e) => updateFields({ address: e.target.value })} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">City Name*</Label>
          <Select value={data.city} onValueChange={(value) => updateFields({ city: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-delhi">New Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country*</Label>
          <Select value={data.country} onValueChange={(value) => updateFields({ country: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="zipCode">Zip code/Pincode</Label>
          <Input id="zipCode" value={data.zipCode} onChange={(e) => updateFields({ zipCode: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone number</Label>
          <div className="flex">
            <Select defaultValue="+91">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+91">+91</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="phoneNumber"
              className="flex-1"
              value={data.phoneNumber}
              onChange={(e) => updateFields({ phoneNumber: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

