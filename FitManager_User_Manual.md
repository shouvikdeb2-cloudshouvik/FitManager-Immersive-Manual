

FitManager  |  Gym Management Software  |  Complete User Manual
FitManager
## Gym Management Software
## Complete User Manual
For Gym Owners and Staff
## Version 1.0  |  2024 Edition
## Developer: Shouvik Deb  |  India
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
Table of Contents
-  Product Overview.......................................................................................................4
1.1  What Is FitManager?.........................................................................................................4
1.2  Who Is This Software For?................................................................................................4
1.3  Main Benefits.....................................................................................................................4
1.4  Problems FitManager Solves.............................................................................................4
-  System Requirements................................................................................................5
2.1  Minimum System Requirements........................................................................................5
2.2  Offline Usage.....................................................................................................................5
2.3  Data Storage Locations.....................................................................................................5
-  Installation Guide........................................................................................................6
3.1  Running the Setup File......................................................................................................6
3.2  First Launch: Step-by-Step Setup......................................................................................6
3.3  Trial Period Explanation.....................................................................................................6
-  Activation & License Guide.......................................................................................7
4.1  What Is a Machine ID?......................................................................................................7
4.2  How to Activate Your Software..........................................................................................7
4.3  What Happens After Activation..........................................................................................7
4.4  Troubleshooting Activation Issues.....................................................................................7
-  Dashboard Overview..................................................................................................8
5.1  The Four Summary Cards.................................................................................................8
5.2  Revenue Summary............................................................................................................8
5.3  Date Filters........................................................................................................................8
5.4  Sidebar Navigation............................................................................................................8
-  Page-by-Page Detailed Guide....................................................................................9
6.1  Login Page........................................................................................................................9
6.2  Members Page..................................................................................................................9
6.3  Add Member Page...........................................................................................................10
6.4  Edit Member Page...........................................................................................................11
6.5  Member Profile Page.......................................................................................................11
6.6  Add Payment Page..........................................................................................................12
6.7  Payments Page...............................................................................................................12
6.8  Reminders Page..............................................................................................................13
6.9  Reports Page...................................................................................................................13
6.10  Admin Page...................................................................................................................14
-  Daily Workflow Guide...............................................................................................17
7.1  Morning Routine..............................................................................................................17
7.2  Adding a New Member....................................................................................................17
7.3  Recording a Payment......................................................................................................17
7.4  Checking Who Owes Money...........................................................................................18
7.5  Sending Payment Reminders..........................................................................................18
7.6  Blocking and Unblocking Members.................................................................................18
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
7.7  Freezing a Member's Membership..................................................................................18
7.8  End-of-Day Routine.........................................................................................................19
7.9  Weekly Checklist.............................................................................................................19
-  Admin & Settings Guide...........................................................................................20
8.1  Configuring Membership Plans........................................................................................20
8.2  Setting Up Auto-Block Rules...........................................................................................20
8.3  Managing Staff Accounts.................................................................................................20
8.4  Backup and Data Safety..................................................................................................21
8.5  Trial and License Behavior..............................................................................................21
8.6  Activity Logging...............................................................................................................22
-  Troubleshooting........................................................................................................23
9.1  The Application Will Not Open.........................................................................................23
9.2  Cannot Log In..................................................................................................................23
9.3  Cannot Add Members or Record Payments....................................................................23
9.4  Activation Problems.........................................................................................................24
9.5  Data Problems.................................................................................................................24
9.6  How to View Log Files.....................................................................................................24
-  Frequently Asked Questions.................................................................................25
10.1  General Questions.........................................................................................................25
10.2  Members and Plans.......................................................................................................25
10.3  Payments and Billing.....................................................................................................26
10.4  Staff and Security..........................................................................................................26
10.5  Backups and Data Safety..............................................................................................26
10.6  Settings and Customization...........................................................................................26
-  Beginner Quick Start Tutorial................................................................................27
Tutorial 1 — Installing and Opening.......................................................................................27
Tutorial 2 — Adding Your First Members...............................................................................27
Tutorial 3 — Recording a Payment.........................................................................................28
Tutorial 4 — Sending a Reminder..........................................................................................28
Tutorial 5 — Viewing Reports.................................................................................................28
Tutorial 6 — Creating a Backup..............................................................................................28
Daily Checklist........................................................................................................................29
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 1.  Product Overview
1.1  What Is FitManager?
FitManager (also known as GymForce) is a complete gym management software designed to
run on your Windows PC. It is built specifically for gym owners, fitness center managers, and
personal training studio operators who need a simple, fast, and reliable way to manage their
business — without depending on the internet.
Everything you need to run your gym is in one place: member records, payment tracking, billing,
reminders, staff accounts, and performance reports. FitManager works completely offline, which
means your data is always private, always available, and always fast — even if your internet
connection is slow or unavailable.
## 1.2  Who Is This Software For?
•Gym owners who want to replace paper registers and spreadsheets
•Fitness center managers overseeing daily operations
•Personal training studio owners who track client memberships
•Front desk staff who record payments and manage members daily
## 1.3  Main Benefits
BenefitWhat It Means for You
Works 100% offline
No internet required. Your gym never stops operating because of a
bad connection.
Your data stays on your PC
Member details and payments are never uploaded to any server.
Total privacy.
No monthly subscription feesPay once, use forever on that computer.
Automatic billing calculation
The system figures out who owes money and how much — without
manual work.
Easy to learnDesigned for non-technical users. Most tasks take just a few clicks.
Staff access controlGive staff only the permissions they need. Protect sensitive data.
1.4  Problems FitManager Solves
•No more paper registers that get lost, torn, or messy
•No more manually calculating who owes how much each month
•No more forgetting to remind members about overdue payments
•No more struggling to see how much revenue your gym collected this month
•No more worrying about staff accessing sensitive gym data they should not see
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
•No more losing member records if a staff member leaves
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 2.  System Requirements
## 2.1  Minimum System Requirements
ComponentRequirement
Operating SystemWindows 10 or later (64-bit recommended)
ProcessorAny modern Intel or AMD processor (2010 or newer)
RAM (Memory)2 GB minimum; 4 GB or more recommended
Storage Space200 MB free disk space for installation
Screen Resolution1024 x 768 or higher
InternetNot required after installation
## 2.2  Offline Usage
FitManager is designed to run completely offline. Once the software is installed on your
computer, you do not need an internet connection for any daily operation.
Internet is only needed for the initial download of the setup file. After installation, all features —
adding members, recording payments, sending reminders, generating reports, and taking
backups — work without any network connection.
TIP: Your data is stored locally at: C:\Users\[YourName]\AppData\Roaming\GymForce\
data\. It never leaves your computer automatically.
## 2.3  Data Storage Locations
TypeLocation on Your Computer
Main databaseC:\Users\[YourName]\AppData\Roaming\GymForce\data\database.json
Manual backupsDocuments\GymForce\Backups\
Activity logsDocuments\FitManager\Logs\app.log
IMPORTANT: ⚠️Do not manually edit the database.json file in Notepad or any text editor.
Editing it incorrectly will corrupt your data. Always use the built-in backup and import tools
instead.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 3.  Installation Guide
3.1  Running the Setup File
Follow these steps to install FitManager on your Windows PC:
1.Locate the Setup.exe file you received or downloaded.
2.Double-click Setup.exe to begin the installation.
3.If Windows shows a security warning, click 'More info' then 'Run anyway'. This is a
normal Windows security prompt for new software.
4.On the installation screen, click 'Next' to continue.
5.Accept the default installation options and click 'Install'.
6.Wait 1 to 2 minutes for the installation to complete.
7.When you see 'Installation Complete', click 'Finish'.
8.A FitManager icon will appear on your desktop. You are ready to launch the software.
3.2  First Launch: Step-by-Step Setup
The first time you open FitManager, the software will guide you through four quick setup steps.
This takes about 5 minutes.
## Step 1 — Activation Screen
You will see a screen titled 'Activate FitManager'. This is the initial software unlock step.
•Type the master activation key provided with your software package.
•Click 'Activate'.
•The software will proceed to the next step automatically.
TIP: This master key is for initial setup only. It is different from your personal license key,
which is for the ongoing subscription after your trial ends.
## Step 2 — Gym Branding
This is where you give the software your gym's identity. Your gym name and logo will appear on
every page of the software and on member receipts.
•Gym Logo (Optional): Click 'Choose File' and select your gym's logo image. Accepted
formats are PNG and JPG.
•Gym Name (Required): Type your gym's full name, for example: 'Sunrise Fitness Center'
or 'Iron Body Gym'.
•Click 'Continue' when done.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## Step 3 — Admin Account Setup
You will now create the administrator login for your gym. This is the master account with full
access to everything.
•Username: Choose a username, for example 'admin' or your own name.
•Password: Create a strong password you will remember.
•Confirm Password: Type the same password again to confirm.
•Click 'Create Admin'.
IMPORTANT: ⚠️Write your username and password down and keep it in a safe place. If
you forget your password, recovery is possible but requires extra steps (see
## Troubleshooting, Section 9).
## Step 4 — First Login
You will now see the login screen. Use the credentials you just created.
•Username: Leave blank for admin login, or type your username.
•Password: Type your password.
•Click 'Login'.
You are now inside FitManager and will see the Dashboard.
## 3.3  Trial Period Explanation
FitManager comes with a 30-day free trial. During this time, all features are fully available with
no restrictions.
Trial StageWhat You SeeWhat You Can Do
Days 1–30 (Active Trial)
A red bar at the top of the screen
showing days remaining
Full access to all features
Day 31+ (Trial Expired)
A popup asking you to activate;
buttons may be grayed out
View existing data only. Cannot add
members, payments, or export.
After ActivationTrial bar disappears completely
Full access to all features,
permanently
TIP: You can activate at any time during or after the trial. Do not wait until the last day —
activating early means no interruption to your gym's operations.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 4.  Activation & License Guide
4.1  What Is a Machine ID?
A Machine ID is a unique code automatically generated from your computer's hardware. It is
created from a combination of your processor, hard drive, and network card details. This code is
different on every computer in the world.
When you purchase a FitManager license, the developer uses your Machine ID to create a
special license key that works only on your computer. This prevents the software from being
copied and used on other machines without authorization.
4.2  How to Activate Your Software
Activation converts your trial version into a permanently licensed version. Follow these steps:
9.Open FitManager. If the trial has expired, an activation popup will appear automatically.
Alternatively, click the 'Activate' button in the red trial bar at the top of the screen.
10.On the activation screen, you will see your Machine ID — a long code unique to your
computer.
11.Click the 'Copy' button next to the Machine ID, or click on the code and press Ctrl+A
then Ctrl+C to copy it.
12.Contact the developer (Shouvik Deb) and share your Machine ID. The developer will
generate a unique license key for your computer.
13.Once you receive your license key, paste it into the 'Enter License Key' field on the
activation screen.
14.Click 'Activate'.
15.If the key is correct, you will see a success message. The trial bar will disappear and all
features will be unlocked permanently.
TIP: When sending your Machine ID to the developer, copy and paste it exactly. Even
one wrong character will result in an invalid license key.
## 4.3  What Happens After Activation
•The red trial countdown bar at the top of the screen disappears.
•All features are permanently unlocked on that computer.
•No more activation reminders or popups.
•The software will continue to work even without any internet connection.
IMPORTANT: ⚠️Your license key is tied to your specific computer. If you replace or
upgrade your computer, you will need to request a new license key for the new machine.
Contact the developer with your new Machine ID.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 4.4  Troubleshooting Activation Issues
ProblemLikely CauseSolution
'Invalid License Key'
error
Machine ID was copied
incorrectly or key was
generated for a different
computer
Copy Machine ID again carefully and
request a new key from the developer.
License key not working
on new computer
License is tied to the old
hardware
Contact developer with the new computer's
Machine ID to get a new license key.
Trial bar still showing
after activation
Application needs to be
restarted
Close FitManager completely and reopen
it. The trial bar should be gone.
Cannot copy Machine
## ID
Text selection issue in the
popup
Click directly on the Machine ID code, then
press Ctrl+A to select all, then Ctrl+C to
copy.
Activation popup not
appearing
Trial still active
Click the 'Activate' button visible in the red
bar at the top of the screen.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 5.  Dashboard Overview
5.1  What Is the Dashboard?
The Dashboard is the first screen you see after logging in. It is your gym's command center,
giving you an instant snapshot of your gym's current status — how many members you have,
how much revenue has been collected, who owes payments, and recent activity.
## 5.2  The Four Summary Cards
At the top of the Dashboard, you will see four colored cards. These update automatically every
time data changes.
CardColorWhat It Shows
Total MembersBlue
The total number of all members registered in your gym,
regardless of their payment status.
Active MembersGreen
Members who are fully paid up and in good standing with no
outstanding dues.
## Pending Members
## Yellow/
## Orange
Members who have unpaid months. They owe money and
need to make a payment.
Blocked MembersRed
Members whose gym access has been blocked, typically due
to extended non-payment.
## 5.3  Revenue Summary
Below the member cards, the Dashboard shows revenue information to help you understand
your gym's income at a glance.
•Today's Collection: Total payments received today.
•Monthly Revenue: Total payments received during the current month.
•Recent Activities: A scrollable list of the latest actions taken in the software, such as new
members added, payments recorded, and status changes.
## 5.4  Date Filters
The Dashboard allows you to filter the revenue and activity data by time period. Use the filter
options to adjust what time range is displayed:
Filter ButtonWhat It Shows
TodayOnly data from the current day
This WeekData from the last 7 days
This MonthData from the last 30 days
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
Filter ButtonWhat It Shows
All TimeAll data since you started using the software
Custom RangeYou set a start date and end date using the date pickers, then click Apply
## 5.5  Sidebar Navigation
On the left side of every page, you will see the main navigation menu. Click any item to go to
that section:
Menu ItemWhere It Takes You
DashboardReturns to the main overview screen
MembersView, search, add, and manage all gym members
PaymentsView all payment transactions across all members
RemindersSend WhatsApp payment reminders to members with dues
ReportsView charts, statistics, and analytics about your gym
AdminConfigure settings, manage staff, backup data (Admin only)
LogoutSigns you out and returns to the login screen
5.6  Gym Branding in Header
At the top of every page, you will see your gym's logo and name. This personalizes the software
for your business and ensures that if staff are using the system, they are clearly using your
gym's management tool.
5.7  Trial Bar (If Not Yet Activated)
If your software is in the trial period, a red bar appears at the very top of the Dashboard showing
how many days remain. When this bar is visible, click the 'Activate' button in that bar to begin
the activation process.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
-  Page-by-Page Detailed Guide
## 6.1  Login Page
## Purpose:
The Login Page is the entry point to FitManager. It serves two roles: completing the first-time
setup when the software is new, and authenticating users on every subsequent launch.
Buttons and Fields
ElementWhat It Does
Username field
Enter your username. For the admin account, you may leave this blank
and just enter the password.
Password fieldEnter your account password.
Login buttonSubmits your credentials and takes you to the Dashboard if correct.
Need Help? linkDisplays basic login instructions on screen.
## FORCE RESET SYSTEM
button
Emergency option that clears all local data and returns the software to its
initial state. Use only if instructed by support. This action is irreversible
without a backup.
First-Time Only: Setup Steps on the Login Page
The first time you run FitManager, the Login Page walks you through three setup steps before
showing the regular login form:
•Step 1 — Activation: Enter the master key to unlock initial setup.
•Step 2 — Gym Branding: Upload your logo and enter your gym name.
•Step 3 — Admin Setup: Create your admin username and password.
These steps only appear once. After setup is complete, the page shows the standard login form
on every future launch.
## Example Usage
Scenario: You arrive at the gym in the morning and open FitManager. You see the login screen.
You leave the username blank (since you are the admin), type your password, and click Login.
Within 2 seconds you are on the Dashboard.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 6.2  Members Page
## Purpose:
The Members Page is where you view, search, and manage every person registered at your
gym. It shows a table with all members and their current status.
Information Displayed in the Table
ColumnWhat It Shows
Member NameThe full name of the gym member
Phone NumberTheir registered mobile number
PlanThe membership plan they are on (e.g., Basic, Standard, Premium)
## Status Badge
Colored label showing current status: Active (green), Pending (yellow),
## Blocked (red), Frozen (blue)
Due AmountHow much money they currently owe, in Indian Rupees
Admission DateThe date they first joined your gym
ActionsButtons to interact with that member
## Action Buttons Per Member
ButtonIconWhat It Does
## View Profile️
Opens the full member profile page showing complete details and
history
## Edit✏️
Opens the edit form to update member information (requires edit
permission)
PaymentOpens the payment form to record a new payment for this member
## Block / Unblock
## / 
## ✅
Toggles the member's blocked status. Blocked members cannot
access the gym.
Search and Filter Options
FilterOptions Available
Search BoxType a member's name or phone number to find them instantly
Status FilterShow all members, or filter by: Active, Pending, Blocked, or Frozen
Plan FilterShow members on all plans, or filter by a specific plan
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## Page Buttons
ButtonWhat It Does
Add Member➕Opens the Add Member form to register a new gym member
## Example Usage
Scenario: A member named Priya comes to pay her dues. You go to the Members page, type
'Priya' in the search box, see her name appear in the list, and click the    button next to her 
name to open the payment form immediately.
## 6.3  Add Member Page
## Purpose:
This page lets you register a brand new member at your gym. You fill in their personal details,
assign them to a membership plan, and save their record.
Required Fields (Must Be Filled)
FieldWhat to EnterExample
Full Name *The member's complete nameRahul Kumar
Phone Number *Their 10-digit mobile number9876543210
Membership Plan *Select from the dropdown list of plansBasic / Standard / Premium
## Admission Date *
The date they are joining. Defaults to
today's date automatically.
## Today (auto-filled)
## Optional Fields
FieldWhat to Enter
Father's NameParent's or guardian's name
Email AddressTheir email for communication
Home AddressTheir residential address
GenderSelect Male, Female, or Other
PhotoClick to upload a photo of the member (JPG or PNG)
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## Buttons
ButtonWhat It Does
← CancelDiscards the form and returns to the Members list without saving anything
Save MemberCreates the new member record and adds them to your gym database
## What Happens After Saving
•The member is created with a status of 'Pending' — meaning they owe their first month's
fee.
•The system starts tracking their billing cycle from their admission date.
•The member now appears in the Members list.
## Example Usage
Scenario: A new member named Amit Patel joins your gym today. You go to Members, click
Add Member, type his name and phone number, select the Standard plan, leave the date as
today, and click Save Member. Amit now appears in your members list, and the system knows
he owes his first month's fee.
## 6.4  Edit Member Page
## Purpose:
This page allows you to update the personal details of an existing member — for example, if
they change their phone number, move to a new address, or you need to correct a spelling error
in their name.
## Editable Fields
All the same fields available when adding a member can be edited here: Full Name, Phone
Number, Membership Plan, Admission Date, Father's Name, Email, Address, Gender, and
## Photo.
## Buttons
ButtonWhat It Does
← CancelDiscards your changes and returns to the previous page without saving
Update MemberSaves all the changes you have made to the member's record
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
IMPORTANT: ⚠️Staff accounts may not have permission to edit member details. If the Edit
button is not visible or is grayed out, your account does not have edit permission. Contact
your gym admin.
## 6.5  Member Profile Page
## Purpose:
The Member Profile page shows the complete picture for one individual member — their
personal details, payment history, current billing status, and all past activity related to that
member.
## Information Displayed
•Member's name, photo (if uploaded), and phone number
•Current status badge (Active, Pending, Blocked, or Frozen)
•Total amount paid since joining
•Number of months currently due and total due amount
•Membership plan assigned to this member
•Admission date
•Full payment history — a list of every payment ever recorded for this member
•Activity log — a timeline of all actions taken on this member's account
## Action Buttons
ButtonIconWhat It Does
Edit✏️Opens the Edit Member form to update their information
Add PaymentOpens the payment form to record a new payment
## Freeze❄️
Temporarily pauses this member's membership (billing and reminders
stop during freeze)
BlockBlocks this member's access. Their status changes to Blocked.
← BackArrowReturns to the Members list
## Example Usage
Scenario: A member calls asking how many months they have paid and how much they still
owe. You go to Members, find them in the list, click    to view their profile, and instantly see ️
their total paid, due months, and payment history. You can answer their question in seconds.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 6.6  Add Payment Page
## Purpose:
This page records a payment made by a member. Every time a member pays — whether in
cash, by UPI, by card, or by cheque — you record it here.
## Fields
FieldWhat to Enter
## Member
Auto-selected if you came from a member's profile. Otherwise, select the
member from the dropdown.
Amount ( )₹The total amount of money the member has paid, in Indian Rupees
Months PaidHow many months of membership this payment covers
Payment DateThe date the payment was received. Defaults to today.
Payment MethodSelect how they paid: Cash, UPI, Card, Cheque, or Bank Transfer
NotesOptional. Write any extra information, such as 'Advance for January 2025'.
## Buttons
ButtonWhat It Does
← CancelGoes back without recording the payment
Save PaymentRecords the payment and updates the member's billing status
## What Happens After Saving
•The payment is added to the member's payment history.
•The member's paid months count increases.
•Their outstanding due amount decreases.
•If all dues are cleared, their status automatically changes from 'Pending' to 'Active'.
## Example Usage
Scenario: Sneha Gupta comes to the front desk and pays  4,000 for 2 months on the Premium ₹
plan. You open her record, click Add Payment, enter 4000 as the amount, 2 as the months,
select Cash as the method, and click Save Payment. Her balance clears and her status turns
green (Active).
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
6.7  Payments Page (All Transactions)
## Purpose:
The Payments page shows a complete record of every payment transaction ever recorded in
your gym, across all members. This is useful for reviewing daily income, searching for specific
transactions, or checking payment history.
Information in the Table
ColumnWhat It Shows
Payment DateWhen the payment was recorded
Member NameWho made the payment
AmountHow much was paid (in  )₹
Months PaidHow many months this payment covered
Payment MethodCash, UPI, Card, etc.
NotesAny notes added at the time of recording
## Filters Available
•Date range selector: Set a start and end date to view payments from a specific period.
•Search by member name: Type a name to find all payments from a specific member.
## 6.8  Reminders Page
## Purpose:
The Reminders page shows all members who have pending or blocked status — meaning they
owe money. This is where you send WhatsApp payment reminders to encourage members to
pay their dues.
## Message Template
At the top of the Reminders page, you will see the reminder message template. This is the text
that gets sent to members. You can customize this message using the following placeholders:
PlaceholderWhat It Inserts Into the Message
{NAME}The member's full name
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
PlaceholderWhat It Inserts Into the Message
{DUE_MONTHS}How many months they currently owe
{AMOUNT}The total amount due in Rupees
Per-Member Action Buttons
ButtonIconWhat It Does
WhatsApp
Opens WhatsApp Web or the WhatsApp app with a pre-written
message ready to send to this member
## Copy Message
Copies the reminder message to your clipboard so you can paste and
send it manually
## Mute
Hides this member from the reminders list. Useful for members who
have a special arrangement.
Reminder HistoryShows a log of all past reminders sent to this member
Page-Level Buttons
ButtonWhat It Does
Bulk WhatsApp
Sends WhatsApp reminders to all members currently visible in the list in
one action
## Show / Hide Muted️
Toggles the visibility of members you have muted, so you can manage or
unmute them
## Example Usage
Scenario: It is the 5th of the month. You check the Reminders page and see 12 members with
pending dues. You click 'Bulk WhatsApp' and WhatsApp opens for each member automatically,
with a message like: 'Hi Rahul, your gym fee for 2 months ( 3,000) is due. Please pay soon. ₹
Thank you!' You confirm and send each one.
## 6.9  Reports Page
## Purpose:
The Reports page provides charts, graphs, and statistics to help you understand your gym's
financial performance and membership trends over time.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## Statistics Displayed
•Total member count, broken down by status (Active, Pending, Blocked, Frozen)
•Total revenue collected in the selected date range
•Payment trends showing income over time
•Member growth showing how your gym has grown over time
## Date Filters
FilterWhat It Shows
TodayStatistics for the current day only
WeekStatistics for the last 7 days
MonthStatistics for the last 30 days
YearStatistics for the last 365 days
Custom RangeYou enter a start date and end date, then click Apply to see that specific period
## Export Feature
Click the '   Export All' button to open a print-friendly version of the reports. Use Ctrl+P on your
keyboard to print it or save it as a PDF file.
## 6.10  Admin Page
## Purpose:
The Admin page is the control center for configuring how FitManager behaves. Here you can
set billing rules, manage membership plans, configure automatic blocking, set up staff accounts,
and manage data backups.
IMPORTANT: ⚠️The Admin page is only accessible to accounts with the Admin role. Staff
accounts with limited permissions cannot access this page.
## Section 1 — Membership Plans
This section shows all the membership plans available at your gym. Each plan has a name and
a monthly price.
ButtonWhat It Does
Add Plan➕Creates a new membership plan with a name and price you specify
Edit✏️Changes the name or price of an existing plan
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
ButtonWhat It Does
## Delete️
Removes a plan. Note: plans assigned to current members cannot be
deleted.
Default plans included with the software: Basic ( 1,500/month), Standard ( 2,500/month), and ₹₹
Premium ( 4,000/month). You can change these to match your gym's actual pricing.₹
## Section 2 — Billing Rules
SettingWhat It Controls
## Max Months Payable
The maximum number of months a member can pay in advance in one
transaction
Allow Partial PaymentIf enabled, members can pay less than a full month's fee
Allow Advance PaymentIf enabled, members can pay ahead of their current due date
Late Fee Amount ( )₹An extra charge added to overdue payments
Late Fee After DaysHow many days after a due date before a late fee is applied
## Rounding Rule
How fractional amounts are rounded: none, round to nearest, floor
(round down), or ceiling (round up)
## Section 3 — Auto Block & Auto Expiry Rules
SettingWhat It Controls
## Enable Auto Block
If turned on, the system will automatically block members who have not
paid for too long
Block After Unpaid MonthsNumber of unpaid months before a member is automatically blocked
Grace Period DaysExtra days allowed after the unpaid threshold before blocking happens
## Auto Unblock After Payment
If turned on, a member is automatically unblocked when they record a
payment
## Section 4 — Freeze Rules
SettingWhat It Controls
Enable FreezeTurns on the ability to pause memberships temporarily
Max Freeze MonthsThe longest a membership can be frozen
Min Freeze DaysThe shortest freeze duration allowed
Allow Multiple FreezesWhether a member can freeze their account more than once
Require ReasonForces staff to enter a reason when freezing a membership
Auto ResumeAutomatically ends the freeze after the set duration
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
SettingWhat It Controls
Freeze Stops RemindersWhile frozen, the member will not receive payment reminders
Freeze Stops Auto-BlockWhile frozen, the member will not be automatically blocked
## Section 5 — Reminder & Notification Rules
SettingWhat It Controls
Enable RemindersTurns the reminder system on or off globally
## Reminder Limit Per Month
Maximum number of reminders that can be sent to one member per
month
Reminder Cooldown DaysMinimum number of days between reminders for the same member
Remind Before DaysHow many days before a due date to start sending reminders
Remind After DaysHow many days after a due date to continue sending reminders
Mute Member OptionAllows individual members to be muted from the reminder list
## Section 6 — Security & Permissions
PermissionWhat It Controls
Edit MemberWhether staff can edit member information
Delete MemberWhether staff can delete members
Edit PaymentWhether staff can modify existing payment records
Delete PaymentWhether staff can delete payment records
Block / UnblockWhether staff can manually block or unblock members
Freeze / UnfreezeWhether staff can pause member memberships
Change PlanWhether staff can change a member's membership plan
View ReportsWhether staff can access the Reports page
Export DataWhether staff can export or backup data
## Section 7 — Staff Management
Add, view, and remove staff accounts that allow other people to log in and use the software with
controlled permissions.
ButtonWhat It Does
Add Staff➕Creates a new staff login account
Delete️Removes a staff account. The staff member can no longer log in.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
When creating a staff account, you enter their Name, a Username they will use to log in, a
Password, and assign them a Role (Admin or Staff).
## Section 8 — Backup & Reset
ButtonWhat It Does
## Backup Data
Downloads a complete copy of all your gym data as a .json file. Keep this
file safe.
## Import Data
Loads data from a previously created backup .json file, restoring your gym
records.
## Reset System
DANGER: Permanently deletes ALL data and resets the software to factory
default. Only use this if you want to start completely fresh. This action
CANNOT be undone.
## Section 9 — Demo Tools
ButtonWhat It Does
## Add Demo Data
Adds sample members and payments for practice and testing purposes.
Useful when first learning the software.
## Save Settings
ButtonWhat It Does
## Save All Settings
Saves all the configuration changes you have made on the Admin page.
Always click this before leaving.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 7.  Daily Workflow Guide
7.1  Morning Routine — Starting the Day
16.Double-click the FitManager icon on your desktop.
17.Wait for the loading screen to complete (5 to 10 seconds).
18.Enter your password on the login screen and click Login.
19.On the Dashboard, check the four summary cards:
◦Is the Active Members number what you expected?
◦Are there any Pending or Blocked members who should be followed up today?
20.Note any members who need to pay soon.
7.2  Adding a New Member
When a new person joins your gym, register them immediately so their billing starts from the
correct date.
21.Click 'Members' in the left sidebar.
22.Click the green '   Add Member' button.➕
23.Fill in the member's Full Name and Phone Number (both required).
24.Select their Membership Plan from the dropdown.
25.The Admission Date auto-fills with today. Change it if they are backdating their
membership.
26.Add optional details (photo, email, address) if available.
27.Click 'Save Member'.
28.The member now appears in your list with Pending status. Ask them to pay their first
month's fee.
7.3  Recording a Payment
Every time a member pays — whether at the counter, by phone, or in advance — record it in
FitManager immediately.
Method 1: Quick Payment from Members List
29.Go to the Members page.
30.Find the member in the list by searching their name or phone.
31.Click the    button next to their name.
32.Enter the payment details (Amount, Months Paid, Method).
33.Click 'Save Payment'.
## Method 2: From Member Profile
34.Go to the Members page and click    to view the member's full profile.️
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
35.Click '   Add Payment' on their profile page.
36.Enter the payment details and click 'Save Payment'.
TIP: Use Method 2 when you want to review a member's full payment history before
recording a new payment, for example to verify how many months they have already paid.
## 7.4  Checking Who Owes Money
37.Click 'Members' in the sidebar.
38.Find the Status filter dropdown at the top of the members table.
39.Select 'Pending' to see only members who owe money.
40.The 'Due Amount' column shows exactly how much each member owes.
## 7.5  Sending Payment Reminders
41.Click 'Reminders' in the sidebar.
42.Review the list — these are all members with pending dues.
43.For one member: Click the    WhatsApp button next to their name. WhatsApp opens 
with the message pre-written.
44.For all members at once: Click '   Bulk WhatsApp' at the top.
45.Confirm and send each message in WhatsApp.
TIP: The reminder message automatically includes the member's name, the number of
months due, and the total amount. You do not need to type anything — just click Send in
WhatsApp.
7.6  Blocking and Unblocking Members
To Block a Member
46.Go to the Members page.
47.Find the member you want to block.
48.Click the    (Block) button next to their name.
49.Confirm the action when prompted.
50.The member's status changes to 'Blocked' (shown in red).
To Unblock a Member
51.Filter the Members list by 'Blocked' status to find blocked members.
52.Click the    (Unblock) button next to the member.✅
53.The member is unblocked immediately.
TIP: If Auto Unblock is enabled in Admin settings, members are unblocked automatically
when they record a payment. You do not need to manually unblock them in that case.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
7.7  Freezing a Member's Membership
Freezing temporarily pauses a membership. No billing accumulates and no reminders are sent
during a freeze. This is useful when a member is traveling, injured, or temporarily inactive.
54.Go to the member's profile by clicking    next to their name.️
55.Click the    Freeze button.❄️
56.Enter the freeze duration and a reason (if required by your settings).
57.Confirm. The member's status changes to 'Frozen' (shown in blue).
58.The membership automatically resumes after the freeze period if Auto Resume is
enabled.
7.8  End-of-Day Routine
59.Go to the Dashboard and review today's collection to confirm all payments were
recorded correctly.
60.Go to Members and filter by Pending to make a note of who should be followed up
tomorrow.
61.Go to Admin and click '   Backup Data' to download today's backup file.
62.Save the backup file to a USB drive, Google Drive, or another safe location.
63.Click 'Logout' in the sidebar.
64.Close the FitManager window.
## 7.9  Weekly Checklist
•Check the Reports page for weekly revenue and member growth trends
•Follow up with members who have been Pending for more than 2 weeks
•Verify that the weekly backup is saved to an external location
•Review any Blocked members to see if they have paid or should be removed
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 8.  Admin & Settings Guide
## 8.1  Configuring Membership Plans
To set up or change the plans available at your gym:
65.Go to Admin in the sidebar.
66.Find the 'Membership Plans' section at the top.
67.Click '   Add Plan' to create a new plan.➕
68.Enter the plan name (e.g., 'Gold') and the monthly price (e.g., 3000).
69.Click Save.
70.To change an existing plan's price, click the    Edit button next to it.✏️
71.Click '   Save All Settings' before leaving the Admin page.
8.2  Setting Up Auto-Block Rules
Auto-block automatically restricts access for members who have not paid for too long, saving
you from manually blocking each one.
72.Go to Admin and find the 'Auto Block & Auto Expiry Rules' section.
73.Turn on 'Enable Auto Block'.
74.Set 'Block After Unpaid Months' — for example, 2 means the member will be blocked
after 2 unpaid months.
75.Set 'Grace Period Days' — for example, 5 means the system waits 5 extra days after the
threshold before blocking.
76.Turn on 'Auto Unblock After Payment' if you want members to be automatically
unblocked when they pay.
77.Click '   Save All Settings'.
TIP: Example: If you set Block After 2 Months with a 3-day grace period, and a member
has not paid for January and February, they will be automatically blocked on March 4th.
## 8.3  Managing Staff Accounts
If you have employees who use FitManager at the front desk, create staff accounts so they can
log in with their own credentials, separate from your admin account.
78.Go to Admin and find the 'Staff Management' section.
79.Click '   Add Staff'.➕
80.Enter the staff member's name, a username they will use to log in, and a password.
81.Assign their role: Staff (limited access) or Admin (full access).
82.Click Save.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## Controlling What Staff Can Do
Under 'Security & Permissions' in Admin, you can toggle on or off specific abilities for staff
accounts. For example, you can prevent staff from deleting members or viewing reports.
IMPORTANT: ⚠️Staff accounts assigned the Admin role have the same full access as the
owner. Only assign Admin role to people you fully trust.
8.4  Backup and Data Safety
Creating a Manual Backup
83.Go to Admin.
84.Scroll to the 'Backup & Reset' section.
85.Click '   Backup Data'.
86.A .json file is downloaded to your computer.
87.Move this file to a safe location: a USB drive, Google Drive, or OneDrive.
Restoring from Backup
88.Go to Admin.
89.Click '   Import Data'.
90.Browse to your saved .json backup file and select it.
91.Confirm the import. All data from the backup will be restored.
## Recommended Backup Frequency
Gym SizeRecommended Backup Frequency
Small (under 50 members)Once per week
Medium (50 to 200 members)Every 2 to 3 days
Large (200+ members)Every day
IMPORTANT: ⚠️If your computer's hard drive fails and you have no backup, all your
member data, payment history, and records will be permanently lost. Always keep at least
one backup copy in a separate location such as a USB drive or cloud storage.
8.5  Understanding the Trial and License Behavior
During the 30-Day Trial
•A red countdown bar appears at the top of the screen.
•All features are fully accessible — nothing is restricted during the trial.
•An 'Activate' button appears in the trial bar for easy access.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
After Trial Expires (Day 31 Onwards)
•The software enters Read-Only Mode automatically.
•You can view all existing member data and payment records.
•You cannot add new members, record payments, edit records, or export data.
•An activation popup appears each time you try to perform a restricted action.
## After Activation
•The trial bar disappears completely.
•All features are permanently unlocked on that specific computer.
•No subscription renewals or repeat payments are needed.
## 8.6  Activity Logging
FitManager automatically records a log of important actions taken in the software. The following
events are logged:
•Member additions and deletions
•Payment recordings and edits
•Status changes (blocked, unblocked, frozen)
•Login and logout events
•Settings changes in Admin
Activity logs can be found at: Documents\FitManager\Logs\app.log. You can open this file with
Notepad to review past activity.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 9.  Troubleshooting
## 9.1  The Application Will Not Open
SymptomCauseFix
App opens briefly and
closes
Background service failed to
start
Wait 30 seconds, then try opening again. If
it persists, restart your computer.
White or blank screen
appears
Backend server did not start
in time
Wait 15 seconds. If still blank, close
FitManager and reopen it.
Error message: 'Cannot
connect to server'
Internal server process
crashed
Close the app completely, wait 10 seconds,
and reopen it.
'Background Service
Stopped' message
Critical internal error
Check the log file at Documents\
FitManager\Logs\app.log for details. Restart
the app.
## 9.2  Cannot Log In
SymptomFix
'Wrong password' error
Check that Caps Lock is off. Passwords are case-sensitive. Try
typing slowly and carefully.
Completely forgot admin
password
Type MASTER-GYM-2026 as the password. This emergency key
works as a backup login. After logging in, immediately go to Admin
and set a new password.
Staff member cannot log in
Verify their username and password in Admin > Staff Management.
Reset their password if needed.
Login button does nothing
One of the fields may be empty. Make sure the password field is
filled.
9.3  Cannot Add Members or Record Payments
SymptomFix
Buttons are grayed out
Your trial period has expired. You must activate the software with a
license key.
'You don't have permission'
message
Your staff account does not have permission for that action. Ask your
gym admin to adjust permissions in Admin > Security.
'All fields are required'
message
One or more required fields are empty. Check for fields marked with
an asterisk (*).
Amount field not accepting
numbers
Click directly on the amount field and try again. Make sure you are
typing numbers, not letters.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 9.4  Activation Problems
SymptomFix
'Invalid License Key' error
Your Machine ID may have been copied incorrectly. Open the
activation popup, copy your Machine ID again carefully (use Ctrl+A
then Ctrl+C), and request a new key.
License key worked on old
computer but not new
computer
Licenses are hardware-locked. You need a new license key for the
new computer. Contact the developer with the new Machine ID.
Trial bar still showing after
activation
Close FitManager completely and reopen it. The activation takes
effect on the next launch.
## 9.5  Data Problems
SymptomFix
Members have disappeared
from the list
Clear any active search text and reset the Status filter to 'All'. The
members may be filtered out.
Payment was recorded but
does not show in history
Refresh the page by navigating away and back to the Payments
page. If still missing, check if the trial expired during entry.
Data from yesterday is gone
This can indicate a database corruption. Import your most recent
backup file from Admin > Import Data.
App shows data from a
different gym
The wrong database file may have been imported. Use Admin >
Import Data to load the correct backup.
9.6  How to View Log Files
If you need to report a problem to the developer or investigate an issue, the log file contains
detailed records:
92.Press the Windows key + E to open File Explorer.
93.Navigate to: Documents\FitManager\Logs\
94.Right-click the file named app.log.
95.Click 'Open with' and select Notepad.
96.Scroll to the bottom to see the most recent entries.
97.Look for lines that say ERROR or CRITICAL to find the cause of the problem.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 10.  Frequently Asked Questions
## 10.1  General Questions
Q: Does FitManager require an internet connection?
A: No. Once installed, FitManager works 100% offline. Internet is only needed for the initial
download of the setup file. All daily operations — adding members, recording payments,
sending reminders, viewing reports — work without any internet connection.
Q: Where is my gym's data stored?
A: All data is stored only on your computer at C:\Users\[YourName]\AppData\Roaming\
GymForce\data\. Your data is never uploaded to any server or cloud service. It stays completely
private on your own machine.
Q: Can I use FitManager on multiple computers?
A: Each computer needs its own separate license. The license key is tied to the hardware of
one specific computer. If you want to use FitManager on a second computer (e.g., a laptop at
the gym and a desktop at home), you will need a separate license key for each machine.
Q: How do I move my data to a new computer?
A: First, create a backup on your old computer: Admin > Backup Data. Install FitManager on the
new computer, activate it with a new license key, then go to Admin > Import Data and load your
backup file. All your member records and payment history will be restored.
10.2  Members and Plans
Q: What does 'Pending' status mean?
A: Pending means the member has one or more unpaid months. They owe money and should
make a payment. You can see the exact amount owed in the 'Due Amount' column on the
Members page.
Q: What does 'Blocked' status mean?
A: Blocked means the member's gym access has been restricted, usually because they have
not paid for an extended period. You can manually block a member using the    button, or the 
system can block them automatically based on your Admin settings.
Q: What does 'Frozen' status mean?
A: Frozen means the membership is temporarily paused. No billing accumulates and no
reminders are sent while a membership is frozen. This is used when a member cannot attend
the gym for a period (due to travel, injury, etc.).
Q: How does billing work?
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
A: Billing is calculated automatically based on each member's admission date. If a member
joins on the 15th, their next payment is due on the 15th of the following month. The system
tracks how many months have passed since the last payment and shows the outstanding due
amount accordingly.
Q: Can a member pay for multiple months in advance?
A: Yes. When recording a payment, enter the number of months being paid in the 'Months Paid'
field. The system will mark those months as paid and update their status accordingly.
Q: How do I change a member's membership plan?
A: Go to the member's profile by clicking    next to their name. Click the Edit (  ) button. ️✏️
Select the new plan from the Plan dropdown and click Update Member. Note that staff may
need permission to change plans — check Admin > Security settings.
10.3  Payments and Billing
Q: What currency does FitManager use?
A: FitManager uses Indian Rupees ( ) by default.₹
Q: Can I edit or delete an old payment record?
A: Editing and deleting payment records requires specific permissions. If your account has the
'Edit Payment' or 'Delete Payment' permission enabled, you can modify records. If you do not
have permission, contact your gym admin.
Q: What if I record a payment with the wrong amount?
A: If you have edit permission, find the payment in the Payments page or in the member's
profile under Payment History. Click Edit to correct it. If you do not have edit permission, ask the
gym admin to correct it.
10.4  Staff and Security
Q: Can I add other staff members to the system?
A: Yes. Go to Admin > Staff Management and click    Add Staff. Create a username and ➕
password for each staff member. You control exactly what they can and cannot do through the
permissions settings.
Q: What is the difference between Admin and Staff roles?
A: An Admin account has full access to every feature including settings, backups, and reset
options. A Staff account has limited access based on the permissions you configure in Admin >
Security & Permissions. Assign the Admin role only to trusted personnel.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
10.5  Backups and Data Safety
Q: How often should I create a backup?
A: For a small gym (under 50 members), once a week is sufficient. For a medium gym (50 to
200 members), every 2 to 3 days is recommended. For a large gym (200+ members), back up
every day. Store backups outside your computer, on a USB drive or cloud storage.
Q: How do I restore from a backup?
A: Go to Admin > Backup & Reset > Import Data. Select your .json backup file. All your data will
be restored from that backup.
10.6  Settings and Customization
Q: How do I change my gym's membership plan prices?
A: Go to Admin > Membership Plans. Click    Edit next to the plan you want to change. Update✏️
the price and save. Remember to click 'Save All Settings' before leaving the Admin page.
Q: Can I change my gym name or logo?
A: Currently, changing the gym name and logo after the initial setup requires resetting the
system and going through the first-time setup again. Before doing this, create a backup of all
your data so you can restore it after the reset.
Q: How do I customize the WhatsApp reminder message?
A: Go to Reminders. At the top of the page, you will see the message template. Edit the text
directly. Use {NAME}, {DUE_MONTHS}, and {AMOUNT} as placeholders. The system fills in the
correct values for each member when sending.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
## 11.  Beginner Quick Start Tutorial
Welcome! This section is written as a simple story to guide you through your very first day with
FitManager. Follow each step in order and you will be fully operational in under one hour.
Tutorial 1 — Installing and Opening FitManager
Imagine you have just received your setup file and want to get started.
98.Find the file named Setup.exe on your computer. It is probably in your Downloads folder.
99.Double-click Setup.exe. If Windows asks 'Do you want to allow this app to make
changes?', click Yes.
100.On the installation screen, keep clicking Next and then Install. Wait 1 to 2
minutes.
101.When it says 'Installation Complete', click Finish.
102.Look on your desktop for the FitManager icon. Double-click it.
103.FitManager opens. You see an 'Activate FitManager' screen. Type the master
key you received with the software and click Activate.
104.You are taken to the Gym Branding screen. Type your gym's name, for example
'Power Fitness Club'. Optionally, upload your gym logo. Click Continue.
105.You see the Admin Setup screen. Type a username (for example, 'admin') and a
password you will remember. Type the password again to confirm. Click Create Admin.
106.The Login screen appears. Leave the username blank, type your password, and
click Login.
IMPORTANT: ⚠️You are now inside FitManager! Write your username and password in a
notebook and keep it safe.
## Tutorial 2 — Adding Your First Three Members
Let us add some members to practice. You can delete these later or use real member details
right away.
107.In the left sidebar, click Members.
108.Click the green '   Add Member' button at the top right.➕
109.Fill in the first member's details: Name = 'Rahul Kumar', Phone = 9876543210,
Plan = Basic. Leave the date as today.
110.Click Save Member. You see a success message. Rahul is now in your list with
Pending status.
111.Click '   Add Member' again.➕
112.Add the second member: Name = 'Priya Sharma', Phone = 9123456789, Plan =
## Standard. Save.
113.Add the third member: Name = 'Amit Patel', Phone = 9234567890, Plan =
## Premium. Save.
You now have 3 members in your gym. Notice they all show 'Pending' status — because they
have not paid yet.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
Tutorial 3 — Recording a Payment
Rahul comes to the desk and pays  1,500 for 1 month in cash.₹
114.On the Members page, find Rahul Kumar in the list.
115.Click the    button next to his name.
116.The payment form opens. The member is already set to Rahul.
117.In the Amount field, type 1500.
118.In the Months Paid field, type 1.
119.Leave the date as today.
120.In Payment Method, select Cash.
121.Click Save Payment.
Rahul's status changes from yellow (Pending) to green (Active). His payment is recorded. He is
fully paid up.
Tutorial 4 — Sending a Reminder
Priya and Amit still have not paid. Let us send them a WhatsApp reminder.
122.In the sidebar, click Reminders.
123.You see Priya and Amit listed — both have pending dues.
124.Find Priya's row. Click the    WhatsApp button.
125.WhatsApp opens on your computer or phone with a message already written:
something like 'Hi Priya, your gym fee for 1 month ( 2,500) is due. Please pay soon. ₹
Thank you!'
126.Click Send in WhatsApp.
127.Go back to FitManager and do the same for Amit.
Both members have now received a payment reminder via WhatsApp. You did not have to type
anything — FitManager wrote the message for you.
## Tutorial 5 — Viewing Your Reports
At the end of the week, you want to see how much money you collected.
128.Click Reports in the sidebar.
129.Click the 'Month' quick filter button.
130.You can see a chart showing revenue collected this month, total members, and
status breakdown.
131.Click 'Export All' if you want to print or save this report as a PDF.
## Tutorial 6 — Creating Your First Backup
Before closing FitManager for the night, always back up your data.
132.Click Admin in the sidebar.
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved

FitManager  |  Gym Management Software  |  Complete User Manual
133.Scroll down to the 'Backup & Reset' section.
134.Click '   Backup Data'.
135.A file download starts. The file is named something like gymforce_backup_2024-
## 01-15.json.
136.Save this file to a USB drive or your Google Drive.
137.Click Logout in the sidebar and close FitManager.
Your data is safe. You have successfully completed your first day with FitManager.
Daily Checklist — Print and Keep at Your Desk
TimeTask
Morning — OpeningOpen FitManager, log in, check Dashboard summary cards
During DayAdd new members immediately when they join
During DayRecord every payment as soon as it is received
During DayUpdate member information if they report a change
Evening — ClosingReview pending members for next-day follow-up
Evening — ClosingSend WhatsApp reminders from the Reminders page if needed
Evening — ClosingCreate a backup in Admin > Backup Data
Evening — ClosingClick Logout and close the application
WeeklyCheck Reports for revenue and member growth trends
WeeklyFollow up personally with long-term pending members
WeeklyVerify backup is saved on USB drive or cloud storage
© 2024 FitManager by Shouvik Deb  |  All Rights Reserved