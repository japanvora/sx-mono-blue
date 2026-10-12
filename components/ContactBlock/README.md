# ContactBlock
The ways to reach the business: email, a booking link, and the grievance address — each with an icon, label, value and a one-line expectation.

`div.sx-contact` › `.sx-contact__item` › icon tile + label, value (usually a link) and note.

**Rules:** **no physical address, city or state — ever.** Grievance contact is an email, never a person's name or phone. Each note sets a response expectation you can keep ("Replies within one business day"), because that line becomes a commitment. Pair with a Field form on the contact page. React: `<SX.ContactBlock items={[{icon:"mail",label,value,href,note}]} />`.
