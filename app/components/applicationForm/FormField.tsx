"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"
import { Loader2, CheckCircle2 } from "lucide-react"


export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSavingDraft, setIsSavingDraft] = useState(false)
  const [showDraftModal, setShowDraftModal] = useState(false)
  
  // Load draft from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDraft = localStorage.getItem('dormApplicationDraft')
      if (savedDraft) {
        try {
          const draftData = JSON.parse(savedDraft)
          
          // Small delay to ensure form elements are rendered
          setTimeout(() => {
            // Populate form fields with saved data
            Object.keys(draftData).forEach((key) => {
              const input = document.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
              if (input && draftData[key]) {
                if (input.type === 'file') {
                  // For file inputs, just show the filename that was saved
                  const fileNameSpan = document.getElementById(`${input.id}-filename`)
                  if (fileNameSpan && draftData[key]) {
                    fileNameSpan.textContent = draftData[key]
                  }
                } else if (input.tagName === 'SELECT') {
                  // For select elements, set the value
                  input.value = draftData[key]
                } else {
                  input.value = draftData[key]
                }
              }
            })
            
            toast("Draft loaded successfully!", {
              description: "Your previously saved draft has been restored.",
            })
          }, 100)
        } catch (error) {
          console.error('Error loading draft:', error)
        }
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target
    const fileNameSpan = document.getElementById(`${fileInput.id}-filename`)
    if (fileNameSpan) {
      if (fileInput.files && fileInput.files.length > 0) {
        fileNameSpan.textContent = fileInput.files[0].name
      } else {
        fileNameSpan.textContent = "No file chosen"
      }
    }
  }

  const saveAsDraft = () => {
    setIsSavingDraft(true)
    
    try {
      const form = document.querySelector('form') as HTMLFormElement
      const formData = new FormData(form)
      const draftData: Record<string, string> = {}

      // Save all form fields to localStorage
      formData.forEach((value, key) => {
        if (value instanceof File) {
          // For files, just save the filename
          if (value.name) {
            draftData[key] = value.name
          }
        } else {
          draftData[key] = value.toString()
        }
      })

      // Also capture select values that might not be in FormData
      const selects = form.querySelectorAll('select')
      selects.forEach((select) => {
        if (select.name && select.value) {
          draftData[select.name] = select.value
        }
      })

      localStorage.setItem('dormApplicationDraft', JSON.stringify(draftData))
      
      // Show the modal instead of toast
      setShowDraftModal(true)
      
      // Auto-close modal after 3 seconds
      setTimeout(() => {
        setShowDraftModal(false)
      }, 3000)
    } catch (error) {
      console.error('Error saving draft:', error)
      toast("Error saving draft", {
        description: "There was a problem saving your draft. Please try again.",
      })
    } finally {
      setIsSavingDraft(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear the draft after successful submission
    localStorage.removeItem('dormApplicationDraft')

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

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">
                  Date of Birth <span className="text-destructive">*</span>
                </Label>
                <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicantType">
                  Applicant Type <span className="text-destructive">*</span>
                </Label>
                <Select name="applicantType" required>
                  <SelectTrigger id="applicantType">
                    <SelectValue placeholder="Select applicant type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="old">Old</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dormApplied">
                Dorm Applied For <span className="text-destructive">*</span>
              </Label>
              <Select name="dormApplied" required>
                <SelectTrigger id="dormApplied">
                  <SelectValue placeholder="Select dormitory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="liadlaw-aircon">Liadlaw Hall - Aircon</SelectItem>
                  <SelectItem value="liadlaw-fan">Liadlaw Hall - Fan</SelectItem>
                  <SelectItem value="lihangin">Lihangin Hall</SelectItem>
                </SelectContent>
              </Select>
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

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="academicYear">
                  Academic Year <span className="text-destructive">*</span>
                </Label>
                <Select name="academicYear" required>
                  <SelectTrigger id="academicYear">
                    <SelectValue placeholder="Select academic year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-2025">2024-2025</SelectItem>
                    <SelectItem value="2025-2026">2025-2026</SelectItem>
                    <SelectItem value="2026-2027">2026-2027</SelectItem>
                    <SelectItem value="2027-2028">2027-2028</SelectItem>
                    <SelectItem value="2028-2029">2028-2029</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="semester">
                  Semester <span className="text-destructive">*</span>
                </Label>
                <Select name="semester" required>
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st">1st Semester</SelectItem>
                    <SelectItem value="2nd">2nd Semester</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card>
          <CardHeader>
            <CardTitle>Medical Information</CardTitle>
            <CardDescription>Health-related information for accommodation purposes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="physicalDisability">
                Physical Disability or Special Needs, if any
              </Label>
              <Textarea
                id="physicalDisability"
                name="physicalDisability"
                placeholder="Please describe any physical disabilities or special needs (leave blank if none)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">
                Allergies/Allergic to, if any
              </Label>
              <Textarea
                id="allergies"
                name="allergies"
                placeholder="Please list any allergies (leave blank if none)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">
                Medications/Maintenance if any and for what
              </Label>
              <Textarea
                id="medications"
                name="medications"
                placeholder="Please list any medications and what they are for (leave blank if none)"
                rows={3}
              />
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

            <div className="space-y-2">
              <Label htmlFor="placeOfOrigin">
                Place of Origin <span className="text-destructive">*</span>
              </Label>
              <Select name="placeOfOrigin" required>
                <SelectTrigger id="placeOfOrigin">
                  <SelectValue placeholder="Select place of origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luzon">Luzon</SelectItem>
                  <SelectItem value="mindanao">Mindanao</SelectItem>
                  <SelectItem value="visayas">Visayas</SelectItem>
                  <SelectItem value="cebu-province">Cebu Province</SelectItem>
                  <SelectItem value="cebu-component-cities">Cebu Component Cities</SelectItem>
                  <SelectItem value="cebu-city">Cebu City</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Father's Information */}
        <Card>
          <CardHeader>
            <CardTitle>Father's Information</CardTitle>
            <CardDescription>Details about your father</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fatherName">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="fatherName" name="fatherName" placeholder="Father's full name" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fatherOccupation">
                  Occupation <span className="text-destructive">*</span>
                </Label>
                <Input id="fatherOccupation" name="fatherOccupation" placeholder="Father's occupation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherPhone">
                  Contact Number <span className="text-destructive">*</span>
                </Label>
                <Input id="fatherPhone" name="fatherPhone" type="tel" placeholder="+63" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fatherOfficeAddress">
                  Office Address <span className="text-destructive">*</span>
                </Label>
                <Input id="fatherOfficeAddress" name="fatherOfficeAddress" placeholder="Father's office address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fatherEmail">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input id="fatherEmail" name="fatherEmail" type="email" placeholder="Father's email" required />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mother's Information */}
        <Card>
          <CardHeader>
            <CardTitle>Mother's Information</CardTitle>
            <CardDescription>Details about your mother</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="motherName">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input id="motherName" name="motherName" placeholder="Mother's full name" required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="motherOccupation">
                  Occupation <span className="text-destructive">*</span>
                </Label>
                <Input id="motherOccupation" name="motherOccupation" placeholder="Mother's occupation" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherPhone">
                  Contact Number <span className="text-destructive">*</span>
                </Label>
                <Input id="motherPhone" name="motherPhone" type="tel" placeholder="+63" required />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="motherOfficeAddress">
                  Office Address <span className="text-destructive">*</span>
                </Label>
                <Input id="motherOfficeAddress" name="motherOfficeAddress" placeholder="Mother's office address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motherEmail">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input id="motherEmail" name="motherEmail" type="email" placeholder="Mother's email" required />
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
                  Annual Family Income <span className="text-destructive">*</span>
                </Label>
                <Select name="familyIncome" required>
                  <SelectTrigger id="familyIncome">
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-150000">Below ₱150,000</SelectItem>
                    <SelectItem value="150000-300000">₱150,000 - ₱300,000</SelectItem>
                    <SelectItem value="300000-400000">₱300,000 - ₱400,000</SelectItem>
                    <SelectItem value="400000-500000">₱400,000 - ₱500,000</SelectItem>
                    <SelectItem value="500000-1000000">₱500,000 - ₱1,000,000</SelectItem>
                    <SelectItem value="above-1000000">Above ₱1,000,000</SelectItem>
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

        {/* Required Attachments */}
        <Card>
          <CardHeader>
            <CardTitle>Required Attachments</CardTitle>
            <CardDescription>Please upload all required documents. File names should follow the format specified.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form5">
                Form 5 <span className="text-destructive">*</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-2">File name: Surname_UPCEBFORM5 (PDF or Image)</p>
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="form5" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                >
                  Choose File
                </label>
                <Input 
                  id="form5" 
                  name="form5" 
                  type="file" 
                  accept=".pdf,image/*"
                  required 
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span id="form5-filename" className="text-sm text-muted-foreground">No file chosen</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="birMother">
                  BIR - Mother <span className="text-destructive">*</span>
                </Label>
                <p className="text-sm text-muted-foreground mb-2">File name: Surname_BIR_Mother</p>
                <div className="flex items-center gap-2">
                  <label 
                    htmlFor="birMother" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Choose File
                  </label>
                  <Input 
                    id="birMother" 
                    name="birMother" 
                    type="file" 
                    accept=".pdf,image/*"
                    required 
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span id="birMother-filename" className="text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="birFather">
                  BIR - Father <span className="text-destructive">*</span>
                </Label>
                <p className="text-sm text-muted-foreground mb-2">File name: Surname_BIR_Father</p>
                <div className="flex items-center gap-2">
                  <label 
                    htmlFor="birFather" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Choose File
                  </label>
                  <Input 
                    id="birFather" 
                    name="birFather" 
                    type="file" 
                    accept=".pdf,image/*"
                    required 
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span id="birFather-filename" className="text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="parentSignature">
                  Parent Signature <span className="text-destructive">*</span>
                </Label>
                <p className="text-sm text-muted-foreground mb-2">File name: Surname_Parent_Signature (Image only)</p>
                <div className="flex items-center gap-2">
                  <label 
                    htmlFor="parentSignature" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Choose File
                  </label>
                  <Input 
                    id="parentSignature" 
                    name="parentSignature" 
                    type="file" 
                    accept="image/*"
                    required 
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span id="parentSignature-filename" className="text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="applicantSignature">
                  Applicant Signature <span className="text-destructive">*</span>
                </Label>
                <p className="text-sm text-muted-foreground mb-2">File name: Surname_Signature (Image only)</p>
                <div className="flex items-center gap-2">
                  <label 
                    htmlFor="applicantSignature" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                  >
                    Choose File
                  </label>
                  <Input 
                    id="applicantSignature" 
                    name="applicantSignature" 
                    type="file" 
                    accept="image/*"
                    required 
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span id="applicantSignature-filename" className="text-sm text-muted-foreground">No file chosen</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicantPicture">
                Applicant Picture (2x2) <span className="text-destructive">*</span>
              </Label>
              <p className="text-sm text-muted-foreground mb-2">File name: Surname_Picture (Image only, 2x2 size)</p>
              <div className="flex items-center gap-2">
                <label 
                  htmlFor="applicantPicture" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer"
                >
                  Choose File
                </label>
                <Input 
                  id="applicantPicture" 
                  name="applicantPicture" 
                  type="file" 
                  accept="image/*"
                  required 
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span id="applicantPicture-filename" className="text-sm text-muted-foreground">No file chosen</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline" 
            disabled={isSubmitting || isSavingDraft}
            onClick={saveAsDraft}
          >
            {isSavingDraft ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save as Draft"
            )}
          </Button>
          <Button type="submit" disabled={isSubmitting || isSavingDraft} className="min-w-32">
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

      {/* Draft Saved Modal */}
      <Dialog open={showDraftModal} onOpenChange={setShowDraftModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Draft Saved Successfully!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Your progress has been saved. You can safely leave this page and come back later to continue filling out your application.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowDraftModal(false)}>
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  )
}

export default ApplicationForm
