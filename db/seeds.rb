# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#HOME PAGE
page_one = Page.create(name: "home")
page_one_section_one = Section.create(page_id: page_one.id, page_order: 1, heading: "Unique Approach")
Paragraph.create(section_id: page_one_section_one.id, body: "We are assembling a pool of investors that includes corporations, foundations, medical centers, and family offices that have recognized the role of equity investing in innovation to deliver both financial returns and innovative products to improve outcomes for patients. We will also work closely with selected regional sources of innovation and development organizations focused in those areas.")

page_one_section_two = Section.create(page_id: page_one.id, page_order: 2, heading: "Healthcare Innovation and 
Investment Opportunities")
Paragraph.create(section_id: page_one_section_two.id, body: "The opportunity for innovation in healthcare is large both for developing new technologies for existing markets and for the creation of new markets and business models with new technology. Many opportunities are international in scope and some are likely to disrupt current approaches to diagnosis and therapy, increase the role of the consumer, and depend on collaboration among health care providers throughout the episode of care.")

page_one_section_three = Section.create(page_id: page_one.id, page_order: 3, heading: "What’s Different About Us?")
list_one_page_one = List.create(section_id: page_one_section_three.id, page_order: -1)
ListItem.create(list_id: list_one_page_one.id, list_item_content: "We work with partners that have strategic objectives that can be pursued with equity investing and we’ll work with them to refine focus areas for the fund.")
ListItem.create(list_id: list_one_page_one.id, list_item_content: "We engage medtech, biotech, diagnostic, and digital health industry luminaries from our network as venture partners, entrepreneurs-in-residence, and in executive chairman roles.")
ListItem.create(list_id: list_one_page_one.id, list_item_content: "We’ll balance new technology investments for existing markets with investments that combine new market, new business model, and new technology elements.")
ListItem.create(list_id: list_one_page_one.id, list_item_content: "We’ll use our unique accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.")

#ABOUT PAGE
page_two = Page.create(name: "about")
page_two_section_one = Section.create(page_id: page_two.id, page_order: 1, heading: "Balanced Deal Selection")
Paragraph.create(section_id: page_two_section_one.id, body: "Strategic Healthcare Investment Partners will balance deal stage to be approximately 50% early stage with our unique accelerator models and approximately 50% later stage where we will invest with conventional venture funds. We will focus on medical devices, diagnostics, and digital health opportunities that facilitate the success of our medical device investments in an accountable care world.")

page_two_section_two = Section.create(page_id: page_two.id, page_order: 2, heading: "Early Stage Methods")
Paragraph.create(section_id: page_two_section_two.id, body: "We believe that collaboration among strategic players, development organizations, sources of innovation, and a focused accelerator organization can improve the path from sourcing, seed-funding, development, through the Series A-funding of deals with a higher success rate of getting to Series B funding.")

page_two_section_three = Section.create(page_id: page_two.id, page_order: 3, heading: "Focus Areas")
Paragraph.create(section_id: page_two_section_three.id, body: "We will support investment in new technologies that advance our individual strategic partner immediate interests in their existing markets with their current customers. We will also invest in new markets, technologies, and business models that are likely to be of future interest to all of our limited partners in the 3 to 5 year time frame. We will leverage our specific experiences and relationships in neuromodulation, next generation robotics, digital health, sensors and smart devices, active-implantables, and less invasive alternatives to today’s surgical devices.")

page_two_section_four = Section.create(page_id: page_two.id, page_order: 4, heading: "The Fund")
Paragraph.create(section_id: page_two_section_four.id, body: "Strategic Healthcare Investment Partners will raise $150 to 200MM with two founding general partners (Brad and Mudit) and one Founding Venture Partner (Ed). We are seeking a first close in Q3 2016.")


#TEAM PAGE
page_three = Page.create(name: "team")

page_three_section_one = Section.create(page_id: page_three.id, page_order: 1, heading: "Team")
Paragraph.create(section_id: page_three_section_one.id, body: "The Strategic Health Care Partners team has known each other and worked together on multiple healthcare investments over the last 20 years.")

page_three_section_two = Section.create(page_id: page_three.id, page_order: 2, heading: "Our Collective Experience Includes:")
list_one_page_three = List.create(section_id: page_three_section_two.id, page_order: -1)
ListItem.create(list_id: list_one_page_three.id, list_item_content: "Sourcing innovation")
ListItem.create(list_id: list_one_page_three.id, list_item_content: "Leading and mentoring early stage companies")
ListItem.create(list_id: list_one_page_three.id, list_item_content: "Taking companies public")
ListItem.create(list_id: list_one_page_three.id, list_item_content: "Product development in both small and multinational corporations.")

