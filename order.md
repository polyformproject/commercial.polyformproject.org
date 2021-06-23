# Software

`Software Name and Software Description`

# Version

`Software Version`

{{#model=users}}
# Users

`Users`
{{/model=users}}

{{#model=metered}}
# Technical Limits

`Technical Limits`
{{/model=metered}}

# License Fees

`Fees`

{{#expansion=quoted}}
{{#model=users}}
# Additional Users

The customer can pay for more users at these prices: `Expansion Prices`
{{/model=users}}
{{#model=metered}}
# Higher Limits

The customer can pay for more usage at these prices: `Expansion Prices`
{{/model=metered}}
{{/expansion=quoted}}

{{#expansion=usage}}
# Usage-Based Pricing

`Usage-Based Prices`
{{/expansion=usage}}

# Billing

`Billing`

# Payment Terms

Amounts billed must be paid within `Days to Pay` calendar days of receiving the bill.

# Payment Method

`Payment Method`

{{#warranty=period}}
# Warranty Period

`Warranty Period`.
{{/warranty=period}}

{{#support=basic}}
# Support Address

The e-mail address for support requests is `Support E-Mail Address`.
{{/support=basic}}

{{#support=full}}
# Support Fees

`Support Fees`

# Support Channels

- The address of vendor's support portal is `Support Portal Address`.

- The telephone number for support requests is `Support Phone Number`.

# Support Service Levels

The vendor agrees to respond to support requests as follows:

##  Critical Support Requests

- respond `Critical Response Time`
- update on status `Critical Update Interval`
- provide a solution `Critical Solution Time`

## Urgent Support Requests
- respond `Urgent Response Time`
- update on status `Urgent Update Interval`
- provide a solution `Urgent Solution Time`

## Regular Support Requests
- respond `Regular Response Time`
- update on status `Regular Update Interval`
- provide a solution `Regular Solution Time`
{{/support=full}}
