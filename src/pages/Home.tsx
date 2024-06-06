import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loader } from "@/lib/loader";
import { SelectContent } from "@radix-ui/react-select";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const board = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const menu = board.menus[0];
  const sections = menu.sections;
  // Beer section (section 0) has no name - fixup
  for (const section of sections) {
    if (!section.name) {
      section.name = "Beers";
    }
    // Fill in section style options
    section.styles = [...new Set(section.items.map((item) => item.style))];
    console.log(section.styles);
  }

  // https://stackoverflow.com/questions/78321710/shadcn-ui-select-change-state-when-user-selects-item

  return (
    <>
      <h1>EasyTappd</h1>
      <h2>{board.website}</h2>
      <h3>{menu.name}</h3>
      <Separator className="my-4" />
      <Tabs defaultValue={sections[0].name} className="w-[400px]">
        <TabsList>
          {sections.map((section) => (
            <TabsTrigger value={section.name}>{section.name}</TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent value={section.name}>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Choose style" />
              </SelectTrigger>
              <SelectContent>
                {section.styles.map((style) => (
                  <SelectItem
                    className="bg-slate-950"
                    key="style"
                    value={style}
                  >
                    {style}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Separator className="my-4" />
            {section.items.map((item) => (
              <Card>
                <CardTitle>
                  <span className="font-bold">{item.brewery}</span>&nbsp;
                  <span className="font-normal">{item.name}</span>
                </CardTitle>
                <CardContent className="flex flex-row items-start gap-2 mt-1">
                  <img
                    src={item.label_image_thumb}
                    height="50"
                    width="50"
                    alt="label image"
                  ></img>
                  <div>
                    <p>{item.style}</p>
                    <p>{item.abv}% ABV</p>
                    <p>{item.brewery_location}</p>
                    <p>
                      {item.containers.map((container) => (
                        <>
                          <span className="mr-2">{container.name}</span>
                          <span className="font-bold mr-2">
                            £{container.price}
                          </span>
                        </>
                      ))}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
