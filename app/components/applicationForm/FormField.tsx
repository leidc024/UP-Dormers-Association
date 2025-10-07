"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"


export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast("Application submitted successfully!", {
       
      description: "Your dormitory application has been received. You will be notified via email.",
    })

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Basic details about the applicant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="studentId">
                  Student ID Number <span className="text-destructive">*</span>
                </Label>
                <Input id="studentId" name="studentId" placeholder="20XX-XXXXX" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Contact Number <span className="text-destructive">*</span>
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+63" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">
                  Gender <span className="text-destructive">*</span>
                </Label>
                <Select name="gender" required>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>Your current academic standing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="program">
                  Degree Program <span className="text-destructive">*</span>
                </Label>
                <Input id="program" name="program" placeholder="e.g., BS Computer Science" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearLevel">
                  Year Level <span className="text-destructive">*</span>
                </Label>
                <Select name="yearLevel" required>
                  <SelectTrigger id="yearLevel">
                    <SelectValue placeholder="Select year level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                    <SelectItem value="5">5th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="gpa">
                  Current GPA <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="gpa"
                  name="gpa"
                  type="number"
                  step="0.01"
                  min="1.0"
                  max="5.0"
                  placeholder="1.00 - 5.00"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unitsEnrolled">
                  Units Enrolled <span className="text-destructive">*</span>
                </Label>
                <Input id="unitsEnrolled" name="unitsEnrolled" type="number" min="1" required />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address & Distance */}
        <Card>
          <CardHeader>
            <CardTitle>Home Address</CardTitle>
            <CardDescription>Your permanent residence information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">
                Complete Address <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="address"
                name="address"
                placeholder="House No., Street, Barangay, City, Province"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="province">
                  Province <span className="text-destructive">*</span>
                </Label>
                <Input id="province" name="province" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="distanceFromCampus">
                  Distance from Campus (km) <span className="text-destructive">*</span>
                </Label>
                <Input id="distanceFromCampus" name="distanceFromCampus" type="number" min="0" step="0.1" required />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Information */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
            <CardDescription>Family income and financial assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="familyIncome">
                  Monthly Family Income <span className="text-destructive">*</span>
                </Label>
                <Select name="familyIncome" required>
                  <SelectTrigger id="familyIncome">
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-10000">Below ₱10,000</SelectItem>
                    <SelectItem value="10000-20000">₱10,000 - ₱20,000</SelectItem>
                    <SelectItem value="20000-30000">₱20,000 - ₱30,000</SelectItem>
                    <SelectItem value="30000-50000">₱30,000 - ₱50,000</SelectItem>
                    <SelectItem value="above-50000">Above ₱50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="scholarship">Scholarship/Grant</Label>
                <Input id="scholarship" name="scholarship" placeholder="e.g., DOST, CHED" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="financialNeedReason">
                Reason for Financial Need <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="financialNeedReason"
                name="financialNeedReason"
                placeholder="Briefly explain why you need dormitory accommodation"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
            <CardDescription>Person to contact in case of emergency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="emergencyName">
                  Contact Name <span className="text-destructive">*</span>
                </Label>
                <Input id="emergencyName" name="emergencyName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyRelationship">
                  Relationship <span className="text-destructive">*</span>
                </Label>
                <Input id="emergencyRelationship" name="emergencyRelationship" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">
                Contact Number <span className="text-destructive">*</span>
              </Label>
              <Input id="emergencyPhone" name="emergencyPhone" type="tel" required />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" disabled={isSubmitting}>
            Save as Draft
          </Button>
          <Button type="submit" disabled={isSubmitting} className="min-w-32">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ApplicationForm
