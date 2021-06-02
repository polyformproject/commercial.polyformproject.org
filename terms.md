# Order

These terms, together with the order referencing them, make up a software license agreement.  The software, the developer, and the customer are identified on order form.

# Scope

{{#model=trial}}
## Trial

This agreement will continue for the term on the order.  The customer may use the software only to evaluate its functionality and suitability for the customer's needs, not to serve customer's customers or to integrate into production systems.
{{/model=trial}}

{{#model=users}}
## Users Limit

The customer's use of the software is limited to the number of users on the order at any one time.  The customer may reassigning each user at most once per calendar quarter.

## Eligible Users

The customer's employees, the customer's subsidiaries' and affiliates' employees, and independent contractors providing services to the customer may be assigned as users under this agreement.
{{/model=users}}

{{#model=metered}}
## Metered License

The customer's use of the software is limited as described on the order.
{{/model=metered}}

{{#expansion=list}}
## Increase Limits

The customer can increase the limits on its use of the software by paying for additional usage at the vendor's published list price.
{{/expansion=list}}

{{#expansion=quoted}}
## Increase Limits

The customer can increase the limits on its use of the software by paying for additional usage according to the pricing on the order.
{{/expansion=quoted}}

{{#expansion=usage}}
## Overcharges

If the customer exceeds the limits on its use of the software, the customer agrees to pay additional charges for its usage according to the pricing on the order.
{{/expansion=usage}}

{{#expansion=negotiate}}
## Increase Limits

The vendor agrees to task its personnel to negotiate an amendment to this agreement to increase the limits on the customer's use of the software on request.
{{/expansion=negotiate}}

## Versions

{{#maintenance=version}}
This agreement covers only the specific version of the software on the order.
{{/maintenance=version}}

{{#maintenance=term}}
This agreement covers the specific version of the software on the order, plus any new versions of the software that the vendor makes generally available to customers, or specifically provides to the customer, while this agreement continues.  The vendor agrees to make new version of the software fixing bugs and addressing other technical issues identified by its staff and pointed out by customers.
{{/maintenance=term}}

{{#modification=yes}}
## Software Changes

The customer may make changes to the software's source code, compile those changes, and run changed versions of the software.
{{/modification=yes}}

{{#modification=no}}
## No Software Changes

The customer may not make changes to the software's source code.
{{/modification=no}}

## Fees

The vendor agrees to bill the customer per the order.  The customer agrees to pay the fees on the order, usign the payment method on the order.

# Term and Termination

{{#term=perpetual}}
## Perpetual

This agreement continues until one side or the other ends it.
{{/term=perpetual}}

{{#term=year}}
## Fixed Term

This agreement will continue for one year.
{{/term=year}}

{{#term=renewing}}{{/term=renewing}}
## Term and Renewal

This agreement will continue for one year, and then renew automatically for additional year-long terms.  Either side can stop this agreement from renewing automatically by giving the other side notice at least sixty calendar days before it would otherwise renew.

{{#term=month}}
## Month-to-Month

This agreement continues month-by-month, until one side gives the other notice that it will end after the next month-long period ends.
{{/term=month}}

## Termination

Either side can terminate this agreement immediately if the other side breaches and fails to cure their breach within fourteen calendar days of notice.

# Permitted Use

The customer may use the software only for its own computing needs and those of its subsidiaries and affiliates.  The customer may not:

- sell, lease, license, or sublicense the software or documentation

{{#delivery=compiled}}
- decompile, disassemble, or reverse engineer any part of the software
{{/delivery=compiled}}

- allow access to the software by others not licensed by this agreement

- share copies of the software or documentation with with others not licensed by this agreement

- make the software available to others as software-as-a-service

- assist or allow others to use the software against the terms of this agreement

# Intellectual Property

## Software Copyright License

The vendor grants the customer and each authorized user a standard license for any copyrights in covered versions of the software that the vendor can license, to copy, install, back up, and make permitted use of the software.

## Software Patent License

The vendor grants the customer and each authorized user a standard license for any patents can license or becomes able to license, to make permitted use of the software.

## Documentation Copyright License

The vendor grants the customer and all customer personnel a standard license for any copyrights in the documentation that the vendor can license, to read, back up, and copy the documentation.

## Standard License Terms

A standard license means a nonexclusive license for the term of this agreement that is conditional on payment of all fees as required by this agreement and subject to any use limits in this agreement.

## No Other Licenses

Apart from the licenses in [Intellectual Property](#intellectual-property), this agreement does not license or assign any intellectual property rights.

## Open Source Compliance

Some components of the software may be open source software available under free, public licenses.  If the public license terms for any open source component conflict with the terms of this agreement, only the public license terms apply to that component, not the terms of this agreement.  If the license terms for any open source component require an offer of source code or other information related to that component, the vendor agrees to provide on written request.

## Dual Licensing

If any part of the software is or becomes available under a public license during the term of this agreement:

- During the term of this agreement, the customer must abide by this agreement, not the public license.

- After this agreement ends, the customer must abide by the public license.

<!-- begin reporting -->

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

<!-- end reporting -->

# Delivery

{{#delivery=compiled}}
## Binary

The vendor agrees to give the customer a copy of the software in compiled form, as well as its documentation, either by e-mail or by making it available for download online, without any additional charge, within three calendar days of entering this agreement.  {{^maintenance=version}}The vendor agrees to make new versions of the software covered by this agreement available in the same way within three calendar days of their release.{{/maintenance=version}}
{{/delivery=compiled}}

{{#delivery=source}}
## Source

The vendor agrees to give the customer:

- a copy of the software's source code, in the preferred form for review and development

- copies of any scripts or configuration files necessary to compile it

- a copy of the software's documentation

either by e-mail or by making it available for download online, without any additional charge, within three calendar days of entering this agreement.  {{^maintenance=version}}The vendor agrees to make new versions of the software covered by this agreement available in the same way within three calendar days of their release.{{/maintenance=version}}
{{/delivery=source}}

{{#delivery=both}}
## Binary and Source

The vendor agrees to give the customer:

- a copy of the software in compiled form

- a copy of the software's source code, in the preferred form for review and development

- copies of any scripts or configuration files necessary to compile it

- a copy of the software's documentation

either by e-mail or by making it available for download online, without any additional charge, within three calendar days of entering this agreement.  {{^maintenance=version}}The vendor agrees to make new versions of the software covered by this agreement available in the same way within three calendar days of their release.{{/maintenance=version}}
{{/delivery=both}}

## License Keys

If the software requires a license key or keys to function, the vendor agrees to give the customer those keys by e-mail on entering into this agreement.  If license keys for the software expire over time, the vendor agrees to give the customer new license keys by e-mail at least two weeks before the expiration date of the last set of keys.  The customer agrees to share license keys only as required for use of the software under this agreement, and to secure its license keys at least as well as customer's own confidential business information.

{{#escrow=yes}}
# Escrow

The parties agree to engage a third-party software escrow agent to received, hold, and release source code for the software if the vendor stops maintaining the software, becomes insolvent or files for bankruptcy, or discontinues the software as a commercial product.
{{/escrow=yes}}

{{#escrow=no}}
# No Escrow

The parties do not agree to use any software escrow service for the source code of the software under this agreement.
{{/escrow=no}}

{{#support=none}}
# No Technical Support

The vendor does not agree to provide technical support for the software under this agreement.
{{/support=none}}

{{^support=none}}
# Technical Support

{{#support=basic}}
## Basic Support

During its regular business hours, the vendor agrees to respond to e-mail support requests from customer personnel about configuration of, use of, and problems with the software and its documentation.  The vendor does not agree to any specific service levels for response to support requests.
{{/support=basic}}

{{#support=full}}
## Full Support

- The vendor agrees to respond to support requests from customer personnel, by phone and through its support portal, about configuration of, use of, and problems with the software and its documentation.  The vendor will respond to support requests every hour of every day of the year, according to the service levels on the order.

- If the vendor fails to meet its support service-level agreements for three months in a row, the customer can end this agreement by notice to vendor.  If the customer ends this agreement for unresponsive support, the vendor agrees to refund all the support fees the customer paid for those months.

# Severity Levels

- **Critical Support Requests** are support requests that report:

  - TODO

  - TODO

- **Urgent Support Requests** are support requests that report substantial loss of functionality or responsiveness of the software.

- Other support requests are **Regular Support Requests**.
{{/support=full}}

## Access

The customer agrees to provide the vendor prompt access to personnel, systems, and requested information in order to respond to support requests.

## Confidentiality

On the customer's request, the vendor will agree to the terms of a standard, published, mutual nodisclosure agreement with the customer, for the purpose of fulfilling its support obligations under this agreement through its term.

{{/support=none}}

{{^model=trial}}
# Warranties

## Perform As Documented
The vendor guarantees that the software will perform as described in its documentation {{#warranty=period}}during the warranty period on the order{{/warranty=period}}{{#warranty=term}}while this agreement continues{{/warranty=term}}, except when:

- the customer uses an older version of the software than the latest provided under this agreement

{{#modification=yes}}
- the customer modifies the software
{{/modification=yes}}

- the customer runs the software using hardware or software different from that required, according to the documentation

- the customer combines the software with other software or hardware in ways not described in the documentation, and a problem results from the combination

## Free of Malware

The vendor guarantees that the software will be kept free of malicious code, such as cmputer worms and viruses.

## Limiting Code

The developer guarantees that the software will be kept free of code that automatically limits or disables software functionality, other than:

- code that limits or disables functionality on faliure to validate license keys

- code that limits or disables functionality based on automatic monitoring of any limits on its use under this agreement

## Software Dependencies

If the software depends on, installs, configures, or links to other software in order to function, the vendor guarantees that those software dependencies will be either provided in the copies of the software delivered to the customer or generally available for the customer to download, free or charge, from a well known website or Internet service, such as an open source software package repository.

{{/model=trial}}

# Liability

{{#model=trial}}
## Disclaimer

!!! The vendor provides the software as is, without any warranty.  The vendor disclaims any warranties the law might otherwise imply, like warranties of merchantability, fitness for any particular purpose, title, or noninfringement.
{{/model=trial}}

{{^model=trial}}
## Disclaimer

!!! [Warranties](#warranties) sets out the only warranties the vendor provides for the software.  The vendor disclaims any warranties the law might otherwise imply, like warranties of merchantability, fitness for any particular purpose, title, or noninfringement.
{{/model=trial}}

## Liability Cap

!!! Except for [Uncapped Liabilities](#uncapped-liabilities), neither side's total liability for breach of this agreement will exceed the amount of fees the vendor received from the customer under this agreement during the twelve months before the first claim is made.  This limit applies even if the side liable is advised that the other may suffer damages, and even if the customer paid no fees at all.

## Uncapped Liabilities

[Liability Cap](#liability-cap) does not apply to:

- the customer's obligations to pay fees

- the vendor's obligations to indemnify the customer

- liabilities the law requires to be unlimited

## Unforeseeable Damages

Neither side will be liable for breach-of-contract damages they could not have reasonably foreseen when entering into this agreement.

## General Indemnity

Subject to [Indemnification Process](#indemnification-process), the vendor agrees to indemnify the customer for legal claims by others alleging that permitted use of the software infringes any copyright, trademark, or trade secret right, or breaks any law.

## Patent Indemnity

{{#patent=none}}The vendor will not indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=none}}

{{#patent=known}}The vendor agrees to indemnify the customer for claims by others alleging that the software infringes a patent that vendor personnel were aware of before the allegation was made.{{/patent=known}}

{{#patent=all}}The vendor agrees to indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=all}}

## Scope of Indemnity

Throughout this agreement, to indemnify means to indemnify and hold harmless for all liability, expenses, damages, and costs, as well as to defend the indemnified party.  Indemnification is the indemnified side's only remedy under this agreement for claims covered.

## Indemnification Process

Both sides agree that to receive indemnification under this agreement, they must give notice of any covered claim quickly, allow the other side to control investigation, defense, and settlement, and cooperate with those efforts.  Both sides agree that if they fail to give notice of any covered claim quickly, indemnification will not cover amounts that could have been defended against or mitigated if notice had been given quickly.  Both sides agree that if they take control of the defense and settlement of any covered claim, they will not agree to any settlements that admit fault or impose obligations on the other side without their permission.

## Repair, Replace, Refund

If the vendor or the customer receives written notice of a claim that the software infringes any intellectual property right or breaks any law, or vendor reasonably anticipates a claim of that kind, the developer may take any of these steps:

- The developer may provide the customer a new version of the software that no longer infringes or breaks the law.  That new version will be covered by this agreement.  The customer will not pay any additional fee for the new version.

- If the problem is infringement, the developer may get licenses for the customer so that the customer's use of the software no longer infringes.

- If the problem is illegality, the developer may get the approvals, licenses, or other requirements needed to abide by the law.

- The developer may refund any fees the customer has prepaid under this agreement for time remaining in the term of this agreement, on a proportional basis, and end this agreement immediately by giving the customer notice.

# General Contract Terms

## Notices

Both sides agree to give notice under this agreement, the side giving notice must send by e-mail to the address the recipient gave with its signature, or to a different address given later for notices going forward.  If either side finds that e-mail can't be delivered to the e-mail address given, the sender may give notice by registered mail to the address on file for the recipient with the state under whose laws it is organized.

## Governing Law

This agreement will be governed by {{#law=vendor}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=vendor}}{{#law=customer}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=customer}}{{#law=california}}California law{{/law=california}}{{#law=delaware}}Delaware law{{/law=delaware}}{{#law=newyork}}New York law{{/law=newyork}}.

## No CISG

The United Nations Convention on Contracts for the International Sale of Goods will not apply to this agreement.

## No UCITA

As far as the law allows, the Uniform Computer Information Transactions Act will not apply to this agreement.

## Taxes

The customer agrees to pay all tax on fees under this agreement, except tax on the vendor's income.

## Tax Withholding

If the customer is located outside the United States and local law requires the customer to withhold taxes on fees paid under this agreement:

- The customer agrees to make the required tax withholding payments for the vendor by deducting the right amounts from payments to the vendor and paying them to the proper tax authorities.

- The customer agrees to increase the amount of each payment made under this agreement, to offset withholding, so that the vendor receives the full amount owed.

- The customer agrees to give the vendor relevant official tax documentation and tax receipts showing that withholding was required and that proper withholding payment was made, as soon as possible after making any withholding payment.

## Billing Disputes

The customer agrees to give the vendor notice of any suspected error on a bill before the deadline for payment.  Both sides agree to assign relevant personnel to resolve any concerns about bill accuracy in good faith.  The customer agrees to pay the undisputed part of each bill by the original deadline, and any part of the bill resolved later within seven calendar days Deadline` of resolution.

## Government Procurement

The software is commercial computer software, and the document is commercial computer software documentation.  Both were developed exclusively at private expense.  If customer's procurement is subject to Federal Acquisition Regulation 12.212 or Defense Federal Acquisition Regulation Supplement 227.7202, the customer's rights will be only those stated in this agreement.

## Dispute Resolution

{{#disputes=litigation}}The parties do not agree to mediation or arbitration of disputes related to this agreement.{{/disputes=litigation}}

{{#disputes=executives}}The parties agree to try to resolve any dispute related to this agreement by having an executive from each party meet, in person or by phone, to try and resolve the dispute first.  Only if that fails will they bring a lawsuit.{{/disputes=executives}}

{{#disputes=mediation}}The parties agree to try to resolve any dispute related to this agreement through mediation led by a neutral third party.  Only if that fails will they bring a lawsuit.{{/disputes=mediation}}

{{#disputes=jamsdomestic}}Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}} before one arbitrator. The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures. Judgment on the Award may be entered in any court having jurisdiction. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.{{/disputes=jamsdomestic}}

{{#disputes=jamsinternational}}Any dispute, controversy or claim arising out of or relating to this contract, including the formation, interpretation, breach or termination thereof, including whether the claims asserted are arbitrable, will be referred to and finally determined by arbitration in accordance with the JAMS International Arbitration Rules. The Tribunal will consist of one arbitrator. The place of arbitration will be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  The language to be used in the arbitral proceedings will be English.  Judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.({{/disputes=jamsinternational}}

{{#disputes=aaa}}Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.  Claims shall be heard by a single arbitrator. The place of arbitration shall be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.({{/disputes=aaa}}

## Enforcement

Only the parties may enforce rights under this agreement.

## Forum for Disputes

Both sides agree to bring any lawsuits related to this agreement in courts in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  Both sides consent to the exclusive jurisdiction of those courts and waive any objection that they would be an inconvenient forum for a lawsuit.  Both sides agree that the other side can enforce judgments from those courts in other jurisdictions.

## Only Terms

Both sides intend the terms of this agreement, together with the order, as the final, complete, and only expression of their agreement about the software.

## Unenforceable Terms

If a court decides that any part of this agreement is invalid or unenforceable for any reason, and that enforcing the rest of this agreement would not defeat the purpose of this agreement, then rest of this agreement will still apply.

## Excuses

Neither side will be liable for any failure or delay meeting any obligation under this agreement caused by:

- failure of the other side or its personnel to meet their obligations under this agreement

- actions done or delayed at the written request of the other side

- fire, flood, earthquake, and other natural disasters

- declared and undeclared wars, acts of terrorism, sabotage, riots, civil disorder, rebellions, and revolutions

- extraordinary malfunction of Internet infrastructure, data centers, or communication utilities

- government actions taken in response to any of these causes

## Amendments

Both sides may change or add to the terms of this agreement only by signing a written amendment.

## Waivers

Both sides will waive terms of this agreement, if at all, only in signed writing.

## No Assignment

Neither side may assign any right under this agreement without the other side's signed written permission.  Neither side will unreasonably refuse such permission.  Any attempt to assign against the terms of this agreement will have no legal effect.

## No Delegation

Neither side may delegate any performance under this agreement.  Any attempt to delegate will have no legal effect.
