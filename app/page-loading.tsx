/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bd0KZL5tqOk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"

export function FullPageLoading() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#1E40AF] to-[#FDE047]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-8 w-[300px] rounded-md" />
              <Skeleton className="h-6 w-[500px] rounded-md" />
            </div>
            <Skeleton className="h-10 w-[200px] rounded-md" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-6 w-[150px] rounded-md" />
              <Skeleton className="h-8 w-[400px] rounded-md" />
              <Skeleton className="h-6 w-[600px] rounded-md" />
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-[#1E40AF] p-6 text-white shadow-lg">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-6 w-[200px] rounded-md" />
              <Skeleton className="h-4 w-[300px] rounded-md" />
              <Skeleton className="h-9 w-[150px] rounded-md" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-[#FDE047] p-6 text-gray-900 shadow-lg">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-6 w-[200px] rounded-md" />
              <Skeleton className="h-4 w-[300px] rounded-md" />
              <Skeleton className="h-9 w-[150px] rounded-md" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-[#1E40AF] p-6 text-white shadow-lg">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-6 w-[200px] rounded-md" />
              <Skeleton className="h-4 w-[300px] rounded-md" />
              <Skeleton className="h-9 w-[150px] rounded-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1E40AF]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-6 w-[150px] rounded-md" />
              <Skeleton className="h-8 w-[400px] rounded-md" />
              <Skeleton className="h-6 w-[600px] rounded-md" />
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-center gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-[120px] rounded-md" />
                  <Skeleton className="h-4 w-[100px] rounded-md" />
                </div>
              </div>
              <Skeleton className="h-4 w-[400px] rounded-md" />
            </div>
            <div className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-lg">
              <div className="flex items-center gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-[120px] rounded-md" />
                  <Skeleton className="h-4 w-[100px] rounded-md" />
                </div>
              </div>
              <Skeleton className="h-4 w-[400px] rounded-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-6 w-[150px] rounded-md" />
              <Skeleton className="h-8 w-[400px] rounded-md" />
              <Skeleton className="h-6 w-[600px] rounded-md" />
            </div>
          </div>
          <div className="mx-auto grid max-w-md items-center gap-6 py-12">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <Skeleton className="h-5 w-[300px] rounded-md" />
                </AccordionTrigger>
                <AccordionContent>
                  <Skeleton className="h-4 w-[500px] rounded-md" />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <Skeleton className="h-5 w-[300px] rounded-md" />
                </AccordionTrigger>
                <AccordionContent>
                  <Skeleton className="h-4 w-[500px] rounded-md" />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <Skeleton className="h-5 w-[300px] rounded-md" />
                </AccordionTrigger>
                <AccordionContent>
                  <Skeleton className="h-4 w-[500px] rounded-md" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">
                  <Skeleton className="h-4 w-[100px] rounded-md" />
                </Label>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  <Skeleton className="h-4 w-[100px] rounded-md" />
                </Label>
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">
                  <Skeleton className="h-4 w-[100px] rounded-md" />
                </Label>
                <Skeleton className="h-20 w-full rounded-md" />
              </div>
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}