# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
page_one = Page.create(name: "home")
page_one_section_one = Section.create(page_id: page_one.id, page_order: 1, heading: "Unique Approach")
Paragraph.create(section_id: page_one_section_one.id, body: "We are assembling a pool of investors that includes corporations, foundations, medical centers, and family offices that have recognized the role of equity investing in innovation to deliver both financial returns and innovative products to improve outcomes for patients. We will also work closely with selected regional sources of innovation and development organizations focused in those areas.")

page_one_section_two = Section.create(page_id: page_one.id, page_order: 2, heading: "Healthcare Innovation and 
Investment Opportunities")
Paragraph.create(section_id: page_one_section_two.id, body: "The opportunity for innovation in healthcare is large both for developing new technologies for existing markets and for the creation of new markets and business models with new technology. Many opportunities are international in scope and some are likely to disrupt current approaches to diagnosis and therapy, increase the role of the consumer, and depend on collaboration among health care providers throughout the episode of care.")

page_one_section_three = Section.create(page_id: page_one.id, page_order: 3, heading: "What’s Different About Us?")



page_two = Page.create(name: "about")

page_three = Page.create(name: "team")