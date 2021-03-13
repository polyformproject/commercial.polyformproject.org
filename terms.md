{{#model=trial}}{{/model=trial}}
{{#model=unlimited}}{{/model=unlimited}}
{{#model=seats}}{{/model=seats}}
{{#model=metered}}{{/model=metered}}

{{#expansion=none}}{{/expansion=none}}
{{#expansion=list}}{{/expansion=list}}
{{#expansion=quoted}}{{/expansion=quoted}}
{{#expansion=usage}}{{/expansion=usage}}
{{#expansion=negotiate}}{{/expansion=negotiate}}

{{#reporting=phone}}{{/reporting=phone}}
{{#reporting=self}}{{/reporting=self}}
{{#reporting=audit}}{{/reporting=audit}}

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

{{#delivery=compiled}}
# Compiled

The vendor agrees to give the customer a copy of the software in compiled form, as well as its documentation, either by e-mail or by making it available for download online, without any additional charge, within three calendar days of entering this agreement.  {{^maintenance=version}}The vendor agrees to make new versions of the software covered by this agreement available in the same way within three calendar days of their release.{{/maintenance=version}}
{{/delivery=compiled}}

{{#delivery=source}}
{{/delivery=source}}

{{#delivery=both}}{{/delivery=both}}

{{#modification=yes}}{{/modification=yes}}
{{#modification=no}}{{/modification=no}}

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
This agreement covers only the specific version of the software on the ordering document.
{{/maintenance=version}}

{{#maintenance=term}}
This agreement covers the specific version of the software on the ordering document, plus any new versions of the software that the vendor makes generally available to customers, or specifically provides to the customer, while this agreement continues.  The vendor agrees to make new version of the software fixing bugs and addressing other technical issues identified by its staff and pointed out by customers.
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

- The vendor agrees to respond to support requests from customer personnel, by phone and through its support portal, about configuration of, use of, and problems with the software and its documentation.  The vendor will respond to support requests every hour of every day of the year, according to the service levels on the ordering document.

- If the vendor fails to meet its support service-level agreements for three months in a row, the customer can end this agreement by notice to vendor.  If the customer ends this agreement for unresponsive support, the vendor agrees to refund all the support fees the customer paid for those months.
{{/support=full}}

# Warranty

The vendor guarantees that the software will perform as described in its documentation {{#warranty=period}}during the warranty period on the ordering document{{/warranty=period}}{{#warranty=term}}while this agreement continues{{/warranty=term}}.

# Disclaimer

!!! [Warranty](#warranty) is the only warranty the vendor provides for the software.  The vendor disclaims any warranties the law might otherwise imply, like warranties of merchantability, fitness for any particular purpose, title, or noninfringement.

# Liability Cap

!!! Except for [Uncapped Liabilities](#uncapped-liabilities), neither side's total liability for breach of this agreement will exceed the amount of fees the vendor received from the customer under this agreement during the twelve months before the first claim is made.  This limit applies even if the side liable is advised that the other may suffer damages, and even if the customer paid no fees at all.

# Uncapped Liabilities

[Liability Cap](#liability-cap) does not apply to:

- the customer's obligations to pay fees

- the vendor's obligations to indemnify the customer

- liabilities the law requires to be unlimited

# Unforeseeable Damages

Neither side will be liable for breach-of-contract damages they could not have reasonably foreseen when entering into this agreement.

# General Indemnity

Subject to [Indemnification Process](#indemnification-process), the vendor agrees to indemnify the customer for legal claims by others alleging that permitted use of the software infringes any copyright, trademark, or trade secret right, or breaks any law.

# Patent Indemnity

{{#patent=none}}The vendor will not indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=none}}

{{#patent=known}}The vendor agrees to indemnify the customer for claims by others alleging that the software infringes a patent that vendor personnel were aware of before the allegation was made.{{/patent=known}}

{{#patent=all}}The vendor agrees to indemnify the customer for any claims by others alleging that the software infringes any patent.{{/patent=all}}

# Response to a Claim

TODO: procure, modify, replace, terminate

# Governing Law

This agreement will be governed by {{#law=vendor}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=vendor}}{{#law=customer}}the law of the jurisdiction of the address the vendor gives with its signature{{/law=customer}}{{#law=california}}California law{{/law=california}}{{#law=delaware}}Delaware law{{/law=delaware}}{{#law=newyork}}New York law{{/law=newyork}}.

# Dispute Resolution

{{#disputes=litigation}}The parties do not agree to mediation or arbitration of disputes related to this agreement.{{/disputes=litigation}}

{{#disputes=executives}}The parties agree to try to resolve any dispute related to this agreement by having an executive from each party meet, in person or by phone, to try and resolve the dispute first.  Only if that fails will they bring a lawsuit.{{/disputes=executives}}

{{#disputes=mediation}}The parties agree to try to resolve any dispute related to this agreement through mediation led by a neutral third party.  Only if that fails will they bring a lawsuit.{{/disputes=mediation}}

{{#disputes=jamsdomestic}}Any dispute, claim or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation or validity thereof, including the determination of the scope or applicability of this agreement to arbitrate, shall be determined by arbitration in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}} before one arbitrator. The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures. Judgment on the Award may be entered in any court having jurisdiction. This clause shall not preclude parties from seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction.{{/disputes=jamsdomestic}}

{{#disputes=jamsinternational}}Any dispute, controversy or claim arising out of or relating to this contract, including the formation, interpretation, breach or termination thereof, including whether the claims asserted are arbitrable, will be referred to and finally determined by arbitration in accordance with the JAMS International Arbitration Rules. The Tribunal will consist of one arbitrator. The place of arbitration will be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  The language to be used in the arbitral proceedings will be English.  Judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.({{/disputes=jamsinternational}}

{{#disputes=aaa}}Any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.  Claims shall be heard by a single arbitrator. The place of arbitration shall be {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.({{/disputes=aaa}}

# Forum for Disputes

Both sides agree to bring any lawsuits related to this agreement in courts in {{#venue=capital}}the capital of the jurisdiction whose laws govern this agreement{{/venue=capital}}{{#venue=biggest}}the largest city of the jurisdiction whose laws govern this agreement{{/venue=biggest}}{{#venue=vendor}}the city nearest the address the vendor gives with its signature{{/venue=vendor}}{{#venue=customer}}the city nearest the address the vendor gives with its signature{{/venue=customer}}.  Both sides consent to the exclusive jurisdiction of those courts and waive any objection that they would be an inconvenient forum for a lawsuit.  Both sides agree that the other side can enforce judgments from those courts in other jurisdictions.
