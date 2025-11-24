# Do Not Call (DNC) Compliance Guide for Awen Energy

## Overview

This document outlines the compliance measures implemented on the Awen Energy website to ensure adherence to federal and state Do Not Call regulations, particularly the Telephone Consumer Protection Act (TCPA) and related state laws.

## Legal Framework

### Federal Regulations

1. **Telephone Consumer Protection Act (TCPA)** - 47 U.S.C. § 227
   - Requires express written consent before making marketing calls to cell phones
   - Requires consent before using automatic telephone dialing systems (ATDS)
   - Requires consent before using prerecorded/artificial voice messages
   - Violations can result in $500-$1,500 per call in damages

2. **FTC Telemarketing Sales Rule (TSR)** - 16 CFR Part 310
   - Governs telemarketing practices
   - Requires companies to maintain internal Do Not Call lists
   - Sets requirements for disclosures during calls

3. **National Do Not Call Registry**
   - Maintained by the FTC
   - Express written consent allows calls even if number is registered

### State-Specific Considerations

Several states have additional requirements beyond federal law:
- **California**: CCPA requirements for data collection
- **Florida**: Florida Telephone Solicitation Act (FTSA)
- **Texas**: Additional consent requirements
- **Other states**: May have specific timing restrictions or additional consent requirements

## Compliance Implementation

### 1. Express Written Consent Requirements

Our Google Form includes three separate consent checkboxes (all required):

#### Phone Call Consent
```
I authorize Awen Energy and its representatives to contact me at the telephone
number provided above, including by using an automatic telephone dialing system
or artificial/prerecorded voice, for marketing and informational purposes related
to solar warranty recovery services. I understand that consent is not required as
a condition of purchase and that I may revoke this consent at any time. I understand
that I may be placed on Awen Energy's internal Do Not Call list by calling
info@awenenergy.com or by telling any Awen Energy representative during a call.
```

**Key Elements:**
- Clear identification of who is calling (Awen Energy)
- Specific phone number being consented to
- Disclosure of ATDS/prerecorded voice usage
- Statement that consent is not required to purchase
- Clear revocation instructions

#### Text Message Consent
```
I authorize Awen Energy to send me text messages (SMS/MMS) at the mobile number
provided above for marketing and informational purposes related to solar warranty
recovery services. I understand that consent is not required as a condition of
purchase, that message and data rates may apply, and that I can opt out at any
time by replying STOP to any text message.
```

**Key Elements:**
- Separate from phone consent (TCPA requirement)
- Message/data rates disclosure
- Simple opt-out method (STOP)
- Statement that consent is not required to purchase

#### Email Consent
```
I authorize Awen Energy to send me emails at the email address provided above
for marketing and informational purposes related to solar warranty recovery
services. I understand that I can unsubscribe at any time by clicking the
unsubscribe link in any email.
```

**Key Elements:**
- CAN-SPAM Act compliance
- Clear unsubscribe option
- Identifies sender and purpose

### 2. Required Record Keeping

**CRITICAL**: You must maintain records of consent for at least 4 years. For each lead, store:

1. **Timestamp**: When consent was obtained
2. **IP Address**: Where the form was submitted from
3. **Full Form Data**: Complete copy of what was submitted
4. **Consent Checkboxes**: Which boxes were checked
5. **Source**: URL/page where consent was obtained

**Google Form Configuration:**
- Enable "Collect email addresses" to verify identity
- Enable response receipts to provide confirmation
- Export responses regularly to a secure backup
- Consider using Google Sheets integration for automatic backup

### 3. Internal Do Not Call List

**Requirements:**
- Maintain a company-specific Do Not Call list
- Honor opt-out requests within 30 days
- Train all staff on opt-out procedures
- Document all opt-out requests with date and method

**Implementation:**
- Create a spreadsheet or database for your internal DNC list
- Check against this list BEFORE every outreach
- Include these sources in your internal list:
  - Anyone who requests to be on the list during a call
  - Anyone who emails/texts STOP or UNSUBSCRIBE
  - Numbers that are disconnected or wrong numbers
  - Anyone who revokes consent

### 4. Calling Best Practices

**Timing Restrictions:**
- No calls before 8:00 AM or after 9:00 PM (recipient's local time)
- Some states have more restrictive hours

**Caller ID Requirements:**
- Must transmit valid caller ID information
- Must display a working call-back number
- Number must connect to a human who can handle opt-outs

**Opening Disclosures:**
Within the first seconds of every call, identify:
1. Your name
2. Company name (Awen Energy)
3. Purpose of call
4. That it's a sales/marketing call

**During the Call:**
- If someone asks to be on your Do Not Call list, honor immediately
- Document the request
- Confirm their request verbally
- Don't try to continue the sales pitch

### 5. Text Message Compliance

**Additional TCPA Requirements for SMS:**
- Each message should include: "Reply STOP to opt-out"
- Process STOP requests immediately (within minutes)
- Also honor: STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT
- Send confirmation: "You've been unsubscribed. No more messages will be sent."

**Content Guidelines:**
- Keep messages brief and relevant
- Don't send excessive frequency (recommend max 4-8/month)
- Identify yourself in every message
- Include opt-out instructions periodically

### 6. Email Compliance (CAN-SPAM Act)

**Requirements:**
- Include physical mailing address in footer
- Subject line must accurately reflect content
- Must honor opt-out within 10 business days
- Clear and conspicuous unsubscribe link
- Identify message as an advertisement (if applicable)

## Risk Mitigation Checklist

Before reaching out to ANY lead, verify:

- [ ] Lead has checked ALL required consent boxes
- [ ] Consent was obtained within reasonable timeframe (recommend <90 days for cold leads)
- [ ] Phone number is not on your internal Do Not Call list
- [ ] You have proper records stored (timestamp, IP, full consent)
- [ ] Calling within permitted hours (8 AM - 9 PM recipient's time)
- [ ] Caller ID is properly configured
- [ ] Staff are trained on opt-out procedures

## Training Requirements

All staff making calls or sending texts must be trained on:

1. TCPA requirements and penalties
2. How to handle opt-out requests
3. Required opening disclosures
4. Proper documentation procedures
5. Internal Do Not Call list procedures
6. Timing and frequency restrictions

**Recommendation**: Conduct training quarterly and document attendance.

## Common Violations to Avoid

1. ❌ Calling cell phones without express written consent
2. ❌ Using ATDS or prerecorded messages without consent
3. ❌ Calling before 8 AM or after 9 PM
4. ❌ Not honoring internal Do Not Call requests
5. ❌ Using pre-checked consent boxes (must be unchecked by default)
6. ❌ Bundling consent with terms of service
7. ❌ Making consent a condition of receiving information/services
8. ❌ Not providing clear opt-out mechanisms
9. ❌ Failing to maintain consent records
10. ❌ Continuing to contact after revocation of consent

## Consent Lifecycle Management

### Initial Consent
- Obtained through website form with explicit checkboxes
- Timestamped and recorded with IP address
- Confirmation email sent to lead

### Active Consent
- Review consent age periodically
- For leads >90 days old with no response, consider re-confirmation
- Monitor engagement (are they responding positively?)

### Consent Revocation
- Honor immediately upon request
- Can be verbal (during call) or written (email/text)
- Add to internal DNC list
- Send confirmation of revocation
- No grace period - stop ALL contact immediately

### Consent Renewal
- If consent >6-12 months old and no engagement, consider whether to continue
- May need to obtain fresh consent for inactive leads
- Best practice: soft re-engagement email asking for confirmation

## Emergency Contact Procedures

If you receive a complaint or legal notice:

1. **STOP** all contact with that person immediately
2. Add to internal Do Not Call list
3. Document the complaint with full details
4. Preserve all records related to that lead
5. Consult with legal counsel
6. Do NOT attempt to resolve directly without legal guidance

## State-Specific Notes

### California
- CCPA requires disclosure of data collection and sale
- California residents have right to opt-out of data sale
- Add privacy policy link to forms

### Florida
- Florida Telephone Solicitation Act (FTSA) has stricter requirements
- Private right of action (easier to sue)
- Required disclosures about call recording

### Texas
- Must provide opt-out within first 30 seconds of call
- Additional restrictions on certain types of solicitations

### Other States
- Review requirements for any state where you have significant lead volume
- Some states require business to register as telemarketer

## Recommended Operational Procedures

### Daily Operations
1. Export Google Form responses to secure spreadsheet
2. Cross-check new leads against internal DNC list
3. Verify all consent checkboxes are marked
4. Schedule outreach within appropriate time windows

### Weekly Reviews
1. Update internal DNC list with any new opt-outs
2. Review staff compliance with opening disclosures
3. Monitor response rates and engagement

### Monthly Audits
1. Review random sample of call recordings (if recording)
2. Verify consent records are properly maintained
3. Check that opt-outs were processed within required timeframes
4. Review any complaints or issues

### Quarterly Activities
1. Refresh staff training
2. Review and update consent language if needed
3. Audit consent records for completeness
4. Review state-specific requirements for any new states you're operating in

## Technology Stack Recommendations

### For Enhanced Compliance

1. **CRM System with DNC Compliance Features**
   - HubSpot, Salesforce, or similar
   - Automatic DNC list checking
   - Consent tracking and expiration reminders

2. **Call Recording and Monitoring**
   - CallRail, Gong, or similar
   - Must disclose recording on every call
   - Useful for training and dispute resolution

3. **Text Message Platform**
   - Twilio with compliance features
   - Automatic STOP processing
   - Opt-out management

4. **Email Platform**
   - Mailchimp, SendGrid, or similar
   - CAN-SPAM compliant
   - Automatic unsubscribe handling

## Legal Disclaimer

This document provides guidance based on current regulations as of 2024-2025. It is not legal advice. You should:

- Consult with a lawyer specializing in TCPA compliance
- Review your specific business practices with legal counsel
- Stay updated on regulatory changes
- Consider obtaining TCPA insurance
- Join industry associations for compliance updates

## Additional Resources

- **FTC TCPA Resources**: https://www.fcc.gov/consumer-and-governmental-affairs/telephone-consumer-protection-act-tcpa
- **National DNC Registry**: https://www.donotcall.gov/
- **FTC Telemarketing Sales Rule**: https://www.ftc.gov/legal-library/browse/rules/telemarketing-sales-rule
- **TCPA Class Action Database**: https://www.tcpaworld.com/

## Questions or Concerns?

If you have questions about this compliance program, contact:
- Legal team/attorney
- Compliance officer
- Industry consultants specializing in TCPA

---

**Document Version**: 1.0
**Last Updated**: 2025-01-24
**Next Review Date**: 2025-04-24 (Quarterly Review)
**Owner**: Legal/Compliance Team
