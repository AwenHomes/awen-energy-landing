# DNC Compliance Implementation Guide

## What Has Been Implemented

Your Awen Energy website now includes comprehensive Do Not Call (DNC) compliance measures to protect you from TCPA violations and ensure safe, legal outreach to leads.

## Files Modified/Created

### 1. `/components/ContactForm.tsx` - UPDATED
**Changes Made:**
- Removed the old insufficient consent disclosure
- Updated Google Form instructions with TCPA-compliant consent language
- Added three separate required consent checkboxes for:
  - Phone calls (including ATDS/prerecorded voice disclosure)
  - Text messages (with message rates disclosure)
  - Email communications

### 2. `/DNC_COMPLIANCE.md` - NEW
**Comprehensive legal compliance guide including:**
- Federal and state regulations overview (TCPA, TSR, CAN-SPAM)
- Complete consent language with legal explanations
- Record-keeping requirements (4-year retention)
- Internal Do Not Call list procedures
- Best practices for calls, texts, and emails
- State-specific considerations
- Risk mitigation checklist
- Training requirements
- Common violations to avoid
- Emergency procedures for complaints

### 3. `/COMPLIANCE_CHECKLIST.md` - NEW
**Daily operational checklist for staff including:**
- Pre-contact verification steps
- Required call opening disclosures
- Opt-out handling procedures
- Weekly, monthly, and quarterly tasks
- Common scenarios and scripted responses
- Red flags that require escalation
- Emergency contact stoppage procedures
- Time zone reference
- Record-keeping quick reference

## Next Steps to Complete Implementation

### Step 1: Update Your Google Form (REQUIRED)

1. Open your Google Form at: https://docs.google.com/forms
2. Add these three consent questions as **Checkboxes** (each as a separate question):

#### Question: "Phone Call Consent" (Required)
```
I authorize Awen Energy and its representatives to contact me at the telephone number provided above, including by using an automatic telephone dialing system or artificial/prerecorded voice, for marketing and informational purposes related to solar warranty recovery services. I understand that consent is not required as a condition of purchase and that I may revoke this consent at any time. I understand that I may be placed on Awen Energy's internal Do Not Call list by emailing info@awenenergy.com or by telling any Awen Energy representative during a call.
```
- **Type**: Checkboxes
- **Option**: "I agree"
- **Make Required**: Yes

#### Question: "Text Message Consent" (Required)
```
I authorize Awen Energy to send me text messages (SMS/MMS) at the mobile number provided above for marketing and informational purposes related to solar warranty recovery services. I understand that consent is not required as a condition of purchase, that message and data rates may apply, and that I can opt out at any time by replying STOP to any text message.
```
- **Type**: Checkboxes
- **Option**: "I agree"
- **Make Required**: Yes

#### Question: "Email Consent" (Required)
```
I authorize Awen Energy to send me emails at the email address provided above for marketing and informational purposes related to solar warranty recovery services. I understand that I can unsubscribe at any time by clicking the unsubscribe link in any email.
```
- **Type**: Checkboxes
- **Option**: "I agree"
- **Make Required**: Yes

### Step 2: Configure Google Form Response Collection (REQUIRED)

1. In Google Form, click on "Responses" tab
2. Click the three dots menu → "Select response destination"
3. Choose "Create a new spreadsheet" or select existing one
4. This creates automatic backup of all responses with timestamps

**Important**: This spreadsheet will be your primary consent record. Keep it secure and backed up.

### Step 3: Set Up Internal Do Not Call List (REQUIRED)

1. Create a new Google Sheet titled "Awen Energy - Internal DNC List"
2. Add columns:
   - Phone Number
   - Date Added
   - Source (Call, Email, Text, Wrong Number)
   - Notes
   - Added By (staff name)

3. Share with all staff who make calls/texts
4. Train staff to check this list BEFORE every contact

### Step 4: Staff Training (REQUIRED)

1. Review `/DNC_COMPLIANCE.md` with all staff
2. Print and distribute `/COMPLIANCE_CHECKLIST.md` to each workstation
3. Role-play opt-out scenarios
4. Quiz staff on:
   - Required opening disclosures
   - How to handle opt-out requests
   - Time restrictions (8 AM - 9 PM local time)
   - Record-keeping requirements

### Step 5: Technology Configuration (REQUIRED)

#### Caller ID Setup
- Ensure your phone system displays: "Awen Energy" or your business number
- Test that the displayed number can receive return calls
- Verify a human can answer to process opt-outs

#### Text Message Platform
If using a texting service (Twilio, etc.):
- Configure automatic STOP keyword processing
- Set up auto-response: "You've been unsubscribed"
- Integrate opt-outs with your internal DNC list

#### Email Platform
If using email marketing (Mailchimp, etc.):
- Ensure unsubscribe link is in footer of every email
- Add physical address to email footer (CAN-SPAM requirement)
- Configure automatic unsubscribe processing

### Step 6: Create Operational Procedures (RECOMMENDED)

Create a simple workflow:

```
NEW LEAD RECEIVED
    ↓
Export from Google Form to secure storage
    ↓
Verify all 3 consent boxes checked
    ↓
Check against Internal DNC List
    ↓
Verify time zone and calling hours
    ↓
CALL/TEXT with proper disclosures
    ↓
Log outcome in CRM
    ↓
If opt-out → Add to DNC list immediately
```

## Consent Language Breakdown

### Why Three Separate Consent Boxes?

**Legal Requirement**: The TCPA requires separate consent for:
1. **Phone calls** - Especially for cell phones and ATDS usage
2. **Text messages** - Treated differently than voice calls under TCPA
3. **Emails** - Governed by CAN-SPAM Act, not TCPA

You **CANNOT** bundle these together or use a single consent for all three.

### Key Consent Elements Explained

#### "Express Written Consent"
- Must be in writing (electronic signature/checkbox counts)
- Must be clear and unambiguous
- Cannot be pre-checked
- Must be separate from Terms of Service

#### "Not Required as Condition of Purchase"
- Federal law requires this disclosure
- Consent must be voluntary, not coerced
- People must be able to do business without consenting to marketing

#### "Including by using automatic telephone dialing system"
- TCPA specifically requires disclosure if using ATDS
- Even if you're not using one NOW, include it for future flexibility
- Prevents need to re-obtain consent later

#### "Revoke consent at any time"
- Must provide clear revocation method
- Multiple methods is better (call, email, tell agent)
- Revocation must be processed immediately

#### "Message and data rates may apply"
- Required for text messages
- Protects you from claims about unexpected charges
- Standard industry practice

## Record Keeping System

### What to Store (Minimum 4 Years)

For each lead, export and store:
1. ✅ Full form submission (all fields)
2. ✅ Google Form timestamp (proves when consent given)
3. ✅ IP address (Google Forms collects this automatically)
4. ✅ Which consent boxes were checked
5. ✅ Copy of the consent language shown (in case you update it later)

### How to Store

**Option 1: Google Sheets (Simple)**
- Let Google Form auto-export to Sheets
- Download backup monthly to your computer
- Store in organized folders by month/year

**Option 2: CRM System (Recommended)**
- Import leads into HubSpot, Salesforce, etc.
- CRM maintains audit trail automatically
- Easier to check DNC list and track interactions

**Option 3: Both (Best Practice)**
- Google Sheets as primary source of truth
- CRM for day-to-day operations
- Regular reconciliation between the two

## Risk Areas to Monitor

### High Risk Activities
- ❌ Calling numbers without verified consent
- ❌ Calling outside 8 AM - 9 PM hours
- ❌ Ignoring opt-out requests
- ❌ Not checking internal DNC list
- ❌ Using pre-checked consent boxes

### Medium Risk Activities
- ⚠️ Calling leads older than 90 days
- ⚠️ Multiple calls to same lead without response
- ⚠️ Not documenting opt-out requests immediately
- ⚠️ Poor caller ID configuration

### Low Risk Activities (When Done Right)
- ✅ Calling leads with recent verified consent
- ✅ Sending emails with clear unsubscribe
- ✅ Texting with STOP instructions
- ✅ Maintaining detailed records

## What Makes You "Safe" to Call/Text

You can confidently reach out to a lead when:

1. ✅ **Recent Consent**: Obtained within 90 days (fresher is better)
2. ✅ **Complete Consent**: All 3 checkboxes marked
3. ✅ **Proper Records**: Full form data stored with timestamp
4. ✅ **Not on DNC**: Verified against internal Do Not Call list
5. ✅ **Right Time**: 8 AM - 9 PM in their time zone
6. ✅ **Training Complete**: Staff knows how to handle opt-outs
7. ✅ **Tech Configured**: Caller ID, text platform, email properly set up

## Red Flags - When NOT to Call

🚨 **DO NOT CALL if:**
- Missing any consent checkbox
- On your internal DNC list
- Wrong number on previous attempts
- Lead has expressed disinterest
- Outside of 8 AM - 9 PM window
- Consent >6 months old with no engagement
- You don't have complete records

## Monthly Compliance Review

Set a calendar reminder for the 1st of each month:

**Review Checklist:**
- [ ] All staff completed any new training
- [ ] Internal DNC list is up to date
- [ ] Consent records are properly backed up
- [ ] No complaints or legal notices received
- [ ] Audit random sample of 20 leads for proper consent
- [ ] Technology systems are functioning correctly
- [ ] Any state regulation changes researched

## Budget for Compliance

### Minimum Cost Implementation (DIY)
- Google Forms: FREE
- Google Sheets: FREE
- Staff training: Internal time
- **Total: $0 + staff time**

### Recommended Implementation
- Google Forms/Sheets: FREE
- Basic CRM (HubSpot Free): FREE
- SMS Platform (Twilio): ~$20-50/month
- Email Platform (Mailchimp): ~$20-50/month
- Legal review of consent: $500-1,500 one-time
- **Total: ~$40-100/month + $500-1,500 setup**

### Enterprise Implementation
- Professional CRM: $50-200/month
- Enterprise SMS platform: $100-500/month
- Enterprise email platform: $50-300/month
- TCPA Compliance Software: $200-1,000/month
- Legal counsel retainer: $500-2,000/month
- TCPA Insurance: $1,000-5,000/year
- **Total: $400-4,000/month + insurance**

## FAQ

### Q: Can I call someone on the National Do Not Call Registry?
**A**: YES, if you have their express written consent (which your form now collects). The consent overrides the National DNC Registry.

### Q: How long is consent valid?
**A**: No specific expiration in federal law, but best practice is to treat consent as "stale" after 6-12 months if there's been no engagement. Consider re-confirming consent for old leads.

### Q: What if someone says they didn't submit the form?
**A**: Apologize, add them to your internal DNC list immediately, and investigate. Could be:
- Someone else submitted using their number
- They forgot they submitted
- Form submission error
Never argue - just apologize and add to DNC list.

### Q: Can I call back someone who didn't answer?
**A**: YES, if they have active consent and aren't on your internal DNC list. Reasonable attempts = 3 calls over 2 weeks. After that, switch to email/text if they consented.

### Q: What if I only get voicemail?
**A**: It's okay to leave a voicemail. Best practice:
- Keep it brief (30 seconds)
- Identify yourself and company
- Provide callback number
- Mention their inquiry
- Include opt-out option

### Q: Do I need consent for transactional calls?
**A**: NO. If someone is already a customer and you're calling about their existing service (not marketing), TCPA doesn't apply. But you still need to honor opt-out requests.

### Q: What about referrals?
**A**: RISKY. If someone says "call my friend," you don't have the friend's written consent. Better to ask the referrer to have their friend submit the form.

### Q: Can I send one text without consent?
**A**: NO. Even a single text to a cell phone without consent violates TCPA. Each violation is $500-1,500.

## When to Consult a Lawyer

Consult legal counsel if:
- You receive a demand letter or complaint
- You're expanding to new states with specific regulations
- You want to use automated dialers or prerecorded messages
- You're unsure if your practices are compliant
- You have high call volume (>1,000 calls/month)
- You operate in California (CCPA), Florida (FTSA), or other strict states

## Summary: Your New Compliance System

✅ **Website**: Updated consent language in ContactForm.tsx
✅ **Documentation**: Comprehensive compliance guide (DNC_COMPLIANCE.md)
✅ **Operations**: Daily checklist for staff (COMPLIANCE_CHECKLIST.md)
✅ **Training**: Materials for staff education
✅ **Records**: Google Form setup for consent storage
✅ **Internal DNC**: System for tracking opt-outs

**You are now equipped to:**
- Collect legally compliant consent
- Safely call, text, and email leads
- Handle opt-out requests properly
- Maintain required records
- Train staff on compliance
- Minimize TCPA violation risk

## Support and Updates

- **Review this guide**: Quarterly
- **Update consent language**: Annually or when regulations change
- **Train staff**: Quarterly refresher
- **Audit records**: Monthly spot checks
- **Legal review**: Annually or as needed

**Questions?** Consult with a TCPA attorney to review your specific situation.

---

**Implementation Version**: 1.0
**Date Created**: 2025-01-24
**Next Review**: 2025-04-24

**Status**: ✅ Ready for deployment - Complete steps 1-6 above to go live
