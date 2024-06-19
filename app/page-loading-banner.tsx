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
     
     
     
      
      
      
    </div>
  )
}