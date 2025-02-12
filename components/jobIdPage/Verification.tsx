import { BadgeCheck, DollarSign, Mail, Phone, Facebook } from "lucide-react"

export function VerificationBadges() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-green-600">
        <BadgeCheck className="h-5 w-5" />
        <span>Identity verified</span>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <DollarSign className="h-5 w-5" />
        <span>Payment Verified</span>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <Phone className="h-5 w-5" />
        <span>Phone Verified</span>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <Mail className="h-5 w-5" />
        <span>Email Verified</span>
      </div>
      <div className="flex items-center gap-2 text-green-600">
        <Facebook className="h-5 w-5" />
        <span>Facebook Verified</span>
      </div>
    </div>
  )
}