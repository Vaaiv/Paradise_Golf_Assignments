                    Paradise_Golf_Assignments

                    Membership_Plan_webpage


Paradise Golf: Interactive Membership Page

Built with plain HTML, CSS, and vanilla JavaScript.
No frameworks, no libraries, no build step needed.


                        What I Built:

The Paradise Golf website already had the hero section, season toggle
buttons, and the three plan cards->Silver, Gold, Platinum. I used
that as my visual reference and tried to match the same layout and feel.

The two things I added myself were the monthly card and the benefits
comparison table. Neither of those existed on the original site so I
built them from scratch using the data from the membership flyer.


                        How It Works:

The season toggle drives everything on the page. Switching seasons
updates the pricing on all cards, shows or hides the monthly card,
and adds or removes the monthly column in the table. All three happen
together on every single click.

On Year Round: three cards, three columns in the table.
On Summer or Winter: four cards, four columns in the table.

When the fourth card appears a four-cards class gets added to the
grid which shrinks every card width from 30% to 22% so all four
fit in one row without breaking or overlapping.


                         Code Structure:

index.html
All the markup. Monthly card starts with display none so it is
hidden before JavaScript even loads.


---

style.css 

// there is a production level practice i used which i learnt in Moffit

CSS variables at root for all colors and the font. Cards use
inline-block with vertical-align top to sit side by side and
align from the top edge.



---

script.js
Three functions->updatePricing, toggleMonthly, setActiveBtn.
All three fire together on every season button click.
Pricing is hardcoded as a plain object. No var used anywhere,
only const and let.
