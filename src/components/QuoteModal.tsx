import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you shortly.",
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Pool Service Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                {...register("name")}
                className="col-span-3"
                placeholder="Your Name"
              />
              {errors.name && <p className="col-span-3 col-start-2 text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                {...register("email")}
                className="col-span-3"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="col-span-3 col-start-2 text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                className="col-span-3"
                placeholder="(555) 123-4567"
              />
              {errors.phone && <p className="col-span-3 col-start-2 text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right self-start">
                Message
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                className="col-span-3"
                placeholder="Tell us about your pool needs..."
                rows={4}
              />
              {errors.message && <p className="col-span-3 col-start-2 text-red-500 text-sm">{errors.message.message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Send Quote Request</Button>
          </DialogFooter>
        </form>
      </Dialog>
    )
}
