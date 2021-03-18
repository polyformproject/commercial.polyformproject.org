# Order

These terms, together with the order referencing them, make up a software license agreement.

<!-- License Model -->

{{#model=trial}}
# Trial License

TODO
{{/model=trial}}

{{#model=unlimited}}
# Unlimited License

TODO
{{/model=unlimited}}

{{#model=seats}}
# Seat License

TODO
{{/model=seats}}

{{#model=metered}}
# Metered License

TODO
{{/model=metered}}

<!-- Expansion -->

{{#expansion=list}}
# Higher Limits

The customer can increase the limits on its use of the software by paying for additional usage at the vendor's published list price.
{{/expansion=list}}

{{#expansion=quoted}}
# Higher Limits

The customer can increase the limits on its use of the software by paying for additional usage according to the pricing on the order.
{{/expansion=quoted}}

{{#expansion=usage}}
# Overage

If the customer exceeds the limits on its use of the software, the customer agrees to pay additional charges for its usage according to the pricing on the order.
{{/expansion=usage}}

{{#expansion=negotiate}}
# Higher Limits

The vendor agrees to task its personnel to negotiate an amendment to this agreement to increase the limits on the customer's use of the software on request.
{{/expansion=negotiate}}

<!-- Reporting -->

{{#reporting=phone}}
# Phone Home

The software will report the customer's usage to the vendor by contacting the vendor's servers via the Internet.  The customer agrees not to take any steps to prevent the software from sending those reports, and will configure its firewall and other settings according to the documentation to allow them.
{{/reporting=phone}}

{{#reporting=self}}
# Usage Reports

The customer agrees to track and accurately report its usage of the software to the vendor on a monthly basis.
{{/reporting=self}}

{{#reporting=audit}}
# Audit

The vendor may audit the customer's usage of the software to confirm that the customer has remained within the limits of this agreement.  The customer agrees to cooperate with audits and the vendor's auditors during regular business hours.  The vendor agrees to cooperate with the customer to minimize the disruption to the customer's business from the audit.  The customer agrees to promptly pay the vendor's costs of performing an audit if the audit reveals that the customer has exceeded the limits on their use under this agreement.
{{/reporting=audit}}

<!-- Payment -->

# Payment

The customer agrees to pay the fees on the order.  The customer's obligation to pay fees already due continues after this agreement ends.

# Billing

The vendor agrees to bill the customer as described on the order.

# Method

The customer agrees to pay using the method on the order.

# Tax

The customer agrees to pay all tax on fees under this agreement, except tax the developer owes on income.

<!-- Term -->

# License Term

The customer's license continues as long as this agreement does.

{{#term=perpetual}}
# Perpetual

This agreement continues until one side or the other ends it.
{{/term=perpetual}}

{{#term=year}}
# Fixed Term

This agreement will continue for one year.
{{/term=year}}

{{#term=renewing}}{{/term=renewing}}
# Term and Renewal

This agreement will continue for one year, and then renew automatically for additional year-long terms.  Either side can stop this agreement from renewing automatically by giving the other side notice at least sixty calendar days before it would otherwise renew.

{{#term=month}}
# Month-to-Month

This agreement continues month-by-month, until one side gives the other notice that it will end after the next month-long period ends.
{{/term=month}}

# Termination

Either side can terminate this agreement immediately if the other side breaches and fails to cure their breach within fourteen calendar days of notice.

<!-- Delivery -->

# Delivery

The vendor agrees to give the customer:

{{#delivery=compiled}}
- a copy of the software in compiled form
{{/delivery=compiled}}

{{#delivery=source}}
- a copy of the software's source code, in the preferred form for review and development

- copies of any scripts or configuration files necessary to compile it
{{/delivery=source}}

{{#delivery=both}}
- a copy of the software in compiled form

- a copy of the software's source code, in the preferred form for review and development

- copies of any scripts or configuration files necessary to compile it
{{/delivery=both}}

- a copy of the software's documentation

- copies of any required notices for open source components of the software

either by e-mail or by making it available for download online, without any additional charge, within three calendar days of entering this agreement.  {{^maintenance=version}}The vendor agrees to make new versions of the software covered by this agreement available in the same way within three calendar days of their release.{{/maintenance=version}}

# License Keys

If the software requires a license key, the vendor agrees to give the customer a set of license keys by e-mail within three calendar days of entering this agreement.  The vendor agrees to send new or replacement license keys to the customer in the same way on request.  If the customer receives license keys, the customer agrees to share them only as needed to make use of the software consistent with the terms of this agreement, and to secure them at least as well as the customer's own confidential business information.

# Software Dependencies

The develoepr agrees to make sure any technical dependencies of the software, such as open source software libraries, are licensed for free to the public and generally available for the customer to download, free of charge, from a public software repository.  The developer does not agree to any service-level agreement or other specific guarantee about any public software repository.

<!-- Modification -->

{{#modification=yes}}
# Modification

The customer may make changes to the software's source code, compile those changes, and run changed versions of the software.
{{/modification=yes}}

{{#modification=no}}
# No Modification

The customer may not make changes to the software's source code.
{{/modification=no}}

{{#escrow=yes}}
# Escrow

The parties agree to engage a third-party software escrow agent to received, hold, and release source code for the software if the vendor stops maintaining the software, becomes insolvent or files for bankruptcy, or discontinues the software as a commercial product.
{{/escrow=yes}}

{{#escrow=no}}
# No Escrow

The parties do not agree to use any software escrow service for the source code of the software under this agreement.
{{/escrow=no}}

# Maintenance

{{#maintenance=version}}
This agreement covers only the specific version of the software on the order.
{{/maintenance=version}}

{{#maintenance=term}}
This agreement covers the specific version of the software on the order, plus any new versions of the software that the vendor makes generally available to customers, or specifically sends to the customer, while this agreement continues.  The vendor agrees to make new version of the software fixing bugs and addressing other technical issues identified by its staff and pointed out by customers.
{{/maintenance=term}}

{{#support=none}}
# No Support

The vendor does not agree to provide technical support for the software under this agreement.
{{/support=none}}

{{#support=basic}}
# Basic Technical Support

During its regular business hours, the vendor agrees to respond to e-mail support requests from customer personnel about configuration of, use of, and problems with the software and its documentation.  The vendor does not agree to any specific service levels for response to support requests.
{{/support=basic}}

{{#support=full}}
# Full Technical Support

- The vendor agrees to respond to support requests from customer personnel, by phone and through its support portal, about configuration of, use of, and problems with the software and its documentation.  The vendor will respond to support requests every hour of every day of the year, according to the service levels on the order.

- If the vendor fails to meet its support service-level agreements for three months in a row, the customer can end this agreement by notice to vendor.  If the customer ends this agreement for unresponsive support, the vendor agrees to refund all the support fees the customer paid for those months.
{{/support=full}}

<!-- Warranties -->

# Performance Warranty

The vendor guarantees that the software will perform as described in its documentation {{#warranty=period}}during the warranty period on the order{{/warranty=period}}{{#warranty=term}}while this agreement continues{{/warranty=term}}.

# Malicious Code

The vendor agrees to keep the software free of malicious code, such as computer worms and viruses.

# Disclaimer

!!! [Performance Warranty](#performance-warranty) and [Malicious Code](#malicious-code) are the only warranties the vendor gives for the software.  The vendor disclaims any warranties the law might otherwise imply, like warranties of merchantability, fitness for any particular purpose, title, or noninfringement.

# Liability Cap

!!! Except for [Uncapped Liabilities](#uncapped-liabilities), neither side's total liability for breach of this agreement will exceed the amount of fees the vendor received from the customer under this agreement during the twelve months before the first claim is made.  This limit applies even if the side liable is advised that the other may suffer damages, and even if the customer paid no fees at all.

# Uncapped Liabilities

[Liability Cap](#liability-cap) does not apply to:

- the customer's obligations to pay fees

- the vendor's obligations to indemnify the customer

- liabilities the law requires to be unlimited

# Unforeseeable Damages

Neither side will be liable for breach-of-contract damages they could not have reasonably foreseen when entering into this agreement.

<!-- Indemnities -->

# General Indemnity

Subject to [Indemnification Process](#indemnification-process), the vendor agrees to indemnify the customer for legal claims by others alleging that permitted use of the software infringes any copyright, trademark, or trade secret right, or breaks any law.

# Patent Indemnity

{{#patent=none}}The vendor will not indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=none}}

{{#patent=known}}The vendor agrees to indemnify the customer for claims by others alleging that the software infringes a patent that vendor personnel were aware of before the allegation was made.{{/patent=known}}

{{#patent=all}}The vendor agrees to indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=all}}

# Indemnity

Throughout this agreement, to "indemnify" for claims means to indemnify, defend, and holding harmless for all liability, expenses, damages, and costs from those claims.

# Notice of Claims

The developer agrees to give the customer prompt notice of any claim that the software infringes intellectual property.

# Response to Claims

The developer may take any of these steps in response to a claim that the software infringes intellectual property rights or breaks the law:

- The developer may send the customer a new version of the software that the customer can use, consistent with the terms of this agreement, without infringing or breaking the law.

- If the problem is infringement, the developer may get a license for the customer so that use of the software consistent with this agreement will no longer infringe.

- If the problem is illegality, the developer may get the government approvals, licenses, or other requirements needed to abide by the law.

- The developer may refund any fees the customer has paid for time not yet elapsed and end this agreement by giving the customer notice.

# Indemnification Process

Both sides agree that to receive indemnification under this agreement, they must give notice of any covered claim quickly, allow the other side to control investigation, defense, and settlement, and cooperate with those efforts.  Both sides agree that if they fail to give notice of any covered claim quickly, indemnification will not cover amounts that could have been defended against or mitigated if notice had been given quickly.  Both sides agree that if they take control of the defense and settlement of any covered claim, they will not agree to any settlements that admit fault or impose obligations on the other side without their permission.

<!-- License Grants -->

# Common License Terms

A **standard license** means a nonexclusive license for the term of this agreement that is conditional on payment of all fees as required by this agreement.

# Software Copyright License

The developer grants the customer a _standard license_ for all copyrights in version of the software covered by this agreement that the developer can license, to copy, install, back up, and make use of the software consistent with the terms of this agreement.

# Software Patent License

The developer grants the customer a _standard license_ for any patents the deveoper can license or becomes able to license, to make use of the software consistent with the terms of this agreement.

# Documentation Copyright License

The developer grants the customer a _standard license_ for any copyrights in the documentation that the developer can license, to read, back up, and make copies.

# Dual Licensing

If the vendor licenses any part of the software to the public for free under different license terms:

- While this agreement continues, the customer must abide by the terms of this agreement, not the free public license.

- After this agreement ends, the customer must abide by the terms of the free public license.

# Open Source Compliance

- Components of the software may be covered by open source software licenses.

- On request, the vendor will send the customer a list of the open source software components for a particular version of the software covered by this agreement.

- If the license for an open source software component requires, the terms of that license will apply to the open source component instead of any of the terms of this agreement.

- If the licens for an open source software component prohibits any restriction in this agreement from applying to that component, the restriction will not apply to that component.

- If the license for an open source software component requires the vendor to make an offer to provide source code or related information for that component, the vendor will do so on request.

# No Other Licenses

The vendor only grants the customer the licenses explicitly stated in this agreement.

# General

## Notices

Both sides agree that to give notice under this agreement, the side giving notice has to send by e-mail to the address the recipient gave with its signature, or to a different address given later for notices going forward.  If either side finds that e-mail can't be delivered to the e-mail address given, it may give notice by registered mail to the address on file for the recipient with the state under whose laws it is organized.

## Governing Law

This agreement will be governed by {{#law=vendor}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=vendor}}{{#law=customer}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=customer}}{{#law=california}}California law{{/law=california}}{{#law=delaware}}Delaware law{{/law=delaware}}{{#law=newyork}}New York law{{/law=newyork}}.

## No CISG

The United Nations Convention on Contracts for the International Sale of Goods will not apply to this agreement.

## No UCITA

As far as the law allows, the Uniform Computer Information Transactions Act will not apply to this agreement.

## Dispute Resolution

{{#disputes=court}}The parties do not agree to mediation or arbitration of disputes related to this agreement.{{/disputes=court}}

{{#disputes=executives}}The parties agree to try to resolve any dispute related to this agreement by having an executive from each party meet, in person or by phone, to try and resolve the dispute first.  Only if that fails will they bring a lawsuit.{{/disputes=executives}}

{{#disputes=mediation}}The parties agree to try to resolve any dispute related to this agreement through mediation led by a neutral third party.  Only if that fails will they bring a lawsuit.{{/disputes=mediation}}

{{#disputes=jamsdomestic}}Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}} before one arbitrator.  The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures.  Judgment on the Award may be entered in any court having jurisdiction.  This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.{{/disputes=jamsdomestic}}

{{#disputes=jamsinternational}}Any dispute, controversy or claim arising out of or relating to this contract, including the formation, interpretation, breach or termination thereof, including whether the claims asserted are arbitrable, will be referred to and finally determined by arbitration in accordance with the JAMS International Arbitration Rules.  The Tribunal will consist of one arbitrator.  The place of arbitration will be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  The language to be used in the arbitral proceedings will be English.  Judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.({{/disputes=jamsinternational}}

{{#disputes=aaa}}Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.  Claims shall be heard by a single arbitrator.  The place of arbitration shall be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.({{/disputes=aaa}}

## Forum for Disputes

Both sides agree to bring any lawsuits related to this agreement in courts in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  Both sides consent to the exclusive jurisdiction of those courts and waive any objection that they would be an inconvenient forum for a lawsuit.  Both sides agree that the other side can enforce judgments from those courts in other jurisdictions.

## Only Terms

Both sides intend the terms of this agreement, together with the order, as the final, complete, and only expression of their agreement about the software.

## Unenforceable Terms

If a court decides that any part of this agreement is invalid or unenforceable for any reason, and that enforcing the rest of this agreement would not defeat the purpose of this agreement, then rest of this agreement will still apply.

## Written Amendments

Both sides may change or add to the terms of this agreement only by signing a written amendment.

## Written Waivers

Both sides will waive terms of this agreement, if at all, only in signed writing.

## No Assignment

Neither side may assign any right under this agreement without the other side's signed written permission.  Any attempt to assign against the terms of this agreement will have no legal effect.

## No Delegation

Neither side may delegate any performance under this agreement.  Any attempt to delegate will have no legal effect.

## Enforcement

Only the parties may enforce rights under this agreement.
